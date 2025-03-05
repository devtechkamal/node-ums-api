"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const messages_1 = require("./messages");
const zod_1 = require("zod");
const errorHandler = (err, req, res, next) => {
    const response = {
        status: err.status || 500,
        message: err.message || messages_1.messages.internalServerError,
    };
    if (err instanceof zod_1.ZodError) {
        response.status = 400;
        response.message = messages_1.messages.validationError;
        response.errors = err.errors.map((e) => ({
            field: e.path.join("."),
            message: e.message,
        }));
    }
    res.status(response.status).json(response);
};
exports.errorHandler = errorHandler;
