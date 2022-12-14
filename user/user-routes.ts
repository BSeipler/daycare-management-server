import express from "express";
import { createUser, getAllUsers, getUser } from "./user-handlers";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/", createUser);

export default userRouter;
