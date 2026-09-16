import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  console.error(err);

  if (err instanceof mongoose.Error.CastError) {
    res.status(400).json({ message: "Invalid ID format" });
    return;
  }

  if (err instanceof mongoose.Error.ValidationError) {
    res.status(400).json({ message: err.message });
    return;
  }

  res.status(500).json({ message: "Internal Server Error" });
};
