import { Request, Response, NextFunction } from "express";
import userService from "./user-service";

export function getUser(req: Request, res: Response, next: NextFunction) {
  return res.json({
    success: 1,
    data: "get user",
  });
}

export function getAllUsers(req: Request, res: Response, next: NextFunction) {
  return res.json({
    success: 1,
    data: "get all users",
  });
}

export async function createUser(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await userService.register();
    return res.json({
      success: true,
      data: user,
    });
  } catch (error: any) {
    return res.json({
      success: false,
      error: error.message,
    });
  }
}
