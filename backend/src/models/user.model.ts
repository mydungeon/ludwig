import {
  getModelForClass,
  index,
  modelOptions,
  pre,
  prop,
} from "@typegoose/typegoose";
import bcrypt from "bcryptjs";

@index({ email: 1 })
@pre<User>("save", async function () {
  // Hash password if the password is new or was updated
  if (!this.isModified("password")) return;

  // Hash password with costFactor of 12
  this.password = await bcrypt.hash(this.password, 12);
})
@pre<any>("findOneAndUpdate", async function (next) {
  if (!this._update.password) next();
  this._update.password = await bcrypt.hash(this._update.password, 12);
  next();
})
@modelOptions({
  schemaOptions: {
    // Add createdAt and updatedAt fields
    timestamps: false,
  },
})
// Export the User class to be used as TypeScript type
// The ordering of each property needs to be in the same order as the table column order component
export class User {
  @prop()
  name: string;

  @prop({ unique: true, required: true, set: (v) => v.toLowerCase() })
  email: string;

  @prop({ required: true, minlength: 8, maxLength: 32, select: false })
  password: string;

  @prop({ type: [String], default: ["user"] })
  roles: string[];

  @prop({ default: null })
  createdAt: EpochTimeStamp;

  @prop({ default: null })
  updatedAt: EpochTimeStamp;

  @prop({ default: null })
  lastLoggedIn: EpochTimeStamp;

  @prop({ default: 0 })
  rating: number;

  // Instance method to check if passwords match
  async comparePasswords(hashedPassword: string, candidatePassword: string) {
    return await bcrypt.compare(candidatePassword, hashedPassword);
  }
}

// Create the user model from the User class
const userModel = getModelForClass(User);
export { userModel };
