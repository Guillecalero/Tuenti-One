const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      maxlength: 10
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate: /^\S+@\S+\.\S+$/,
    },
    imageURL: {
      type: String,
      default: 'https://res.cloudinary.com/andresgarcia/image/upload/v1645980047/imageprofile_bqtqfk.png'
    },
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    },
    friends: {
      type: [String],
    },
    fullName: {
      type: String,
      maxlength: 40,
      validate: /[a-z]/gis
    },
    biography: {
      type: String,
      maxlength: 250
    },
    posts: {
      type: [String],
    },
  },

  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
