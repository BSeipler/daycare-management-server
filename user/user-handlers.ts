import { Request, Response, NextFunction } from "express";

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
