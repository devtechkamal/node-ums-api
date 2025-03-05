"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const client_1 = require("@prisma/client");
const responseHandler_1 = require("../utils/responseHandler");
const messages_1 = require("../utils/messages");
const userValidation_1 = require("../validations/userValidation");
const prisma = new client_1.PrismaClient();
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prisma.user.findMany();
        return (0, responseHandler_1.success)(res, messages_1.messages.fetched, users);
    }
    catch (error) {
        next(error);
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma.user.findFirst({
            where: { id: parseInt(req.params.id) },
        });
        return (0, responseHandler_1.success)(res, messages_1.messages.fetched, user);
    }
    catch (error) {
        next(error);
    }
});
exports.getUserById = getUserById;
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, role } = req.body;
        userValidation_1.userSchema.parse(req.body);
        const user = yield prisma.user.create({
            data: {
                name,
                email,
                role: role.toUpperCase() || "USER",
            },
        });
        return (0, responseHandler_1.success)(res, messages_1.messages.created, user);
    }
    catch (error) {
        next(error);
    }
});
exports.createUser = createUser;
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, email, role } = req.body;
        userValidation_1.userSchema.parse(req.body);
        const user = yield prisma.user.update({
            where: {
                id: parseInt(id),
            },
            data: {
                name,
                email,
                role: role ? role.toUpperCase() : role,
            },
        });
        return (0, responseHandler_1.success)(res, messages_1.messages.updated, user);
    }
    catch (error) {
        next(error);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma.user.delete({
            where: { id: parseInt(req.params.id) },
        });
        return (0, responseHandler_1.success)(res, messages_1.messages.deleted, user);
    }
    catch (error) {
        next(error);
    }
});
exports.deleteUser = deleteUser;
