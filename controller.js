import { Comment } from "./model.js";

export const handelFeedBackRequst = async (req, res) => {
  try {
    const { name, email, comment } = req.body;

    if (!name || !email || !comment) throw new Error("All values are required");

    const creatFeedBackResponse = await Comment.create({
      name,
      email,
      comment,
    });

    if (!creatFeedBackResponse) throw new Error("Internal Server Error");

    console.log("FeedBack saved successfully in database");

    return res.status(200).json({
      messge: "successfully created feedback",
      successfull: true,
      data: creatFeedBackResponse,
    });
  } catch (error) {
    console.log(
      "error while createing feedback entry on database",
      error.message
    );
    return res.status(400).json({
      message: "Error occured while saving feed back in database",
      successfull: false,
      error: error.message,
    });
  }
};
