import { NextFunction, Request, Response } from "express";
import { messages } from "./messages";
import { ZodError } from "zod";

interface ErrorResponse {
  status: number;
  message: string;
  errors?: Array<{ field: string; message: string }>;
}

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const response: ErrorResponse = {
    status: err.status || 500,
    message: err.message || messages.internalServerError,
  };

  if (err instanceof ZodError) {
    response.status = 400;
    response.message = messages.validationError;
    response.errors = err.errors.map((e) => ({
      field: e.path.join("."),
      message: e.message,
    }));
  }

  res.status(response.status).json(response);
};
