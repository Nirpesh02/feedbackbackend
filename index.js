import express from "express";
import cors from "cors"
import { dbConnect } from "./dbconnect.js";
import router from "./route.js";

const app = express();
app.use(cors())

dbConnect();
app.use(express.json());
app.use("/api/v1", router);
app.listen(3000, () => {
  console.log("Server is live in port 3000");
});
