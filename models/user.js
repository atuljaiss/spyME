import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    fname: String,
    lname: String,
    number: String, 
    email: String,
  },
  {
    timestamps: false,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;