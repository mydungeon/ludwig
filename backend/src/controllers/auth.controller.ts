import config from "config";
import { CookieOptions, NextFunction, Request, Response } from "express";
import {
  ChangePasswordInput,
  CreateUserInput,
  LoginUserInput,
} from "../schema/user.schema";
import {
  createUser,
  findMe,
  findUserById,
  signToken,
  updateUser,
} from "../services/profile.service";
import AppError from "../utils/appError";
import redisClient from "../utils/connectRedis";
import { signJwt, verifyJwt } from "../utils/jwt";
import { getNowToUnixTimestamp } from "../utils/date";

// Exclude this fields from the response
export const excludedFields = ["password"];

// Cookie options
const accessTokenCookieOptions: CookieOptions = {
  expires: new Date(
    Date.now() + config.get<number>("accessTokenExpiresIn") * 60 * 1000
  ),
  maxAge: config.get<number>("accessTokenExpiresIn") * 60 * 1000,
  httpOnly: true,
  sameSite: "lax",
};

const refreshTokenCookieOptions: CookieOptions = {
  expires: new Date(
    Date.now() + config.get<number>("refreshTokenExpiresIn") * 60 * 1000
  ),
  maxAge: config.get<number>("refreshTokenExpiresIn") * 60 * 1000,
  httpOnly: true,
  sameSite: "lax",
};

// Only set secure to true in production
if (process.env.NODE_ENV === "production")
  accessTokenCookieOptions.secure = true;

export const registerHandler = async (
  req: Request<{}, {}, CreateUserInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await createUser({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
      createdAt: getNowToUnixTimestamp(),
      updatedAt: getNowToUnixTimestamp(),
    });

    res.status(201).json({
      status: "success",
      data: {
        user,
      },
      message: "You have successfully registered",
    });
  } catch (err: any) {
    if (err.code === 11000) {
      return res.status(409).json({
        status: "fail",
        message: "Email already exist",
      });
    }
    next(err);
  }
};

export const loginHandler = async (
  req: Request<{}, {}, LoginUserInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    // Get the user from the collection
    const user = await findMe({ email: req.body.email });
    // Check if user exist and password is correct
    if (
      !user ||
      !(await user.comparePasswords(user.password, req.body.password))
    ) {
      return next(new AppError("Invalid email or password", 401));
    }
    // Create the Access and refresh Tokens
    const { access_token, refresh_token } = await signToken(user);
    // Send Access Token in Cookie
    res.cookie("access_token", access_token, accessTokenCookieOptions);
    res.cookie("refresh_token", refresh_token, refreshTokenCookieOptions);
    res.cookie("logged_in", true, {
      ...accessTokenCookieOptions,
      httpOnly: false,
    });
    const id = user._id.toString();
    // Set last logged in time
    await updateUser(id, { lastLoggedIn: getNowToUnixTimestamp() }, next);
    // Send Access Token
    res.status(200).json({
      status: "success",
      access_token,
      message: "You have successfully logged in",
    });
  } catch (err: any) {
    if (true) {
      console.log("test", err);
      // res.cookie("refresh_token", "", { maxAge: 1 });
    }
    next(err);
  }
};

// Refresh tokens
const logout = (res: Response) => {
  res.cookie("access_token", "", { maxAge: 1 });
  res.cookie("refresh_token", "", { maxAge: 1 });
  res.cookie("logged_in", "", { maxAge: 1 });
};

export const refreshAccessTokenHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Get the refresh token from cookie
    const refresh_token = req.cookies.refresh_token as string;

    // Validate the Refresh token
    const decoded = verifyJwt<{ sub: string }>(
      refresh_token,
      "refreshTokenPublicKey"
    );

    const message = "Could not refresh access token";
    if (!decoded) {
      return next(new AppError(message, 403));
    }

    // Check if the user has a valid session
    const session = await redisClient.get(decoded.sub);
    if (!session) {
      return next(new AppError(message, 403));
    }

    // Check if the user exist
    const user = await findUserById(JSON.parse(session)._id);

    if (!user) {
      return next(new AppError(message, 403));
    }

    // Sign new access token
    const access_token = signJwt({ sub: user._id }, "accessTokenPrivateKey", {
      expiresIn: `${config.get<number>("accessTokenExpiresIn")}m`,
    });

    // Send the access token as cookie
    res.cookie("access_token", access_token, accessTokenCookieOptions);
    res.cookie("logged_in", true, {
      ...accessTokenCookieOptions,
      httpOnly: false,
    });

    // Send response
    res.status(200).json({
      status: "success",
      access_token,
    });
  } catch (err: any) {
    next(err);
  }
};

export const logoutHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user;
    await redisClient.del(user._id.toString());
    logout(res);
    res
      .status(200)
      .json({ status: "success", message: "You have successfully logged out" });
  } catch (err: any) {
    next(err);
  }
};

export const changePasswordHandler = async (
  req: Request<{}, {}, ChangePasswordInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.user._id;
    const email = res.locals.user.email;
    const user = await findMe({ email });
    if (
      user &&
      (await user.comparePasswords(user.password, req.body.currentPassword))
    ) {
      const updated = await updateUser(
        id,
        { password: req.body.password, updatedAt: getNowToUnixTimestamp() },
        next
      );
      res.status(201).json({
        status: "success",
        data: {
          updated,
        },
        message: "You have successfully updated your password",
      });
    } else {
      res.status(304).json({
        status: "Not Modified",
        data: {
          user,
        },
        message: "You have not modified your password",
      });
    }
  } catch (err: any) {
    console.log("err", err);
    if (err.code === 11000) {
      return res.status(409).json({
        status: "fail",
        message: "Update failed",
      });
    }
    next(err);
  }
};
