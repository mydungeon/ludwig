import { createPrivateKey } from "crypto";
import jwt, { SignOptions } from "jsonwebtoken";
import config from "config";

export const signJwt = (
  payload: Object,
  key: "accessTokenPrivateKey" | "refreshTokenPrivateKey",
  options: SignOptions = {}
) => {
  const rsaPrivateKey = Buffer.from(config.get<string>(key), "base64").toString(
    "utf-8"
  );
  return jwt.sign(payload, rsaPrivateKey, {
    ...(options && options),
    algorithm: "RS256",
  });
};

export const verifyJwt = <T>(
  token: string,
  key: "accessTokenPublicKey" | "refreshTokenPublicKey"
): T | null => {
  try {
    const rsaPrivateKey = Buffer.from(
      config.get<string>(key),
      "base64"
    ).toString("utf-8");
    return jwt.verify(token, rsaPrivateKey) as T;
  } catch (error) {
    console.log(error);
    return null;
  }
};
