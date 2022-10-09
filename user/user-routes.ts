import express from "express";
import { getAllUsers, getUser } from "./user-handlers";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);

export default userRouter;
