import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: 2,
      maxlength: 50,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
    },

    comment: {
      type: String,
      required: [true, "Comment is required"],
      trim: true,
      minlength: 1,
      maxlength: 500,
    },
  },
  {
    timestamps: true,
  }
);

export const Comment = mongoose.model("Comment", commentSchema);
