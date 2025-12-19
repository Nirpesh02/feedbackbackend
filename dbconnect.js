import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const connectionResponse = await mongoose.connect(
      "mongodb+srv://nirpeshdhungel6_db_user:YfIydyCwv4jQhzq8@cluster0.xvatkwr.mongodb.net/?appName=Cluster0"
    );
    if (!connectionResponse) {
      throw new Error("Internal Server Error");
    }
    console.log("Connection with data base created successfully✅");
  } catch (error) {
    console.log(
      "Error occured while establishing connection with database❌",
      error
    );
    console.error(error);
  }
};
