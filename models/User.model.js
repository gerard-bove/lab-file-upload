// models/User.model.js

const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      
    },
    email: {
      type: String,
      
    },
    passwordHash: {
      type: String,
      required: [true, "Password is required."]
    },
    userImageUrl: String
  },
  {
    timestamps: true
  }
);

module.exports = model("User", userSchema);
