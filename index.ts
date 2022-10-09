import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import userRouter from "./user/user-routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("Listening...");
});
