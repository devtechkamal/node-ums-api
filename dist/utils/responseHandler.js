"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.falied = exports.success = void 0;
const success = (res, message, data = "") => {
    const response = {
        success: true,
        message,
        data,
    };
    res.status(200).json(response);
};
exports.success = success;
const falied = (res, message, code = 404) => {
    const response = {
        success: false,
        message,
    };
    res.status(code).json(response);
};
exports.falied = falied;
