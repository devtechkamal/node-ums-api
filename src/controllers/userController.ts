import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { falied, success } from "../utils/responseHandler";
import { messages } from "../utils/messages";
import { userSchema } from "../validations/userValidation";

const prisma = new PrismaClient();

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await prisma.user.findMany();
    return success(res, messages.fetched, users);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await prisma.user.findFirst({
      where: { id: parseInt(req.params.id) },
    });
    return success(res, messages.fetched, user);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, role } = req.body;

    userSchema.parse(req.body);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        role: role.toUpperCase() || "USER",
      },
    });
    return success(res, messages.created, user);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { name, email, role } = req.body;

    userSchema.parse(req.body);

    const user = await prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        email,
        role: role ? role.toUpperCase() : role,
      },
    });
    return success(res, messages.updated, user);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await prisma.user.delete({
      where: { id: parseInt(req.params.id) },
    });
    return success(res, messages.deleted, user);
  } catch (error) {
    next(error);
  }
};
