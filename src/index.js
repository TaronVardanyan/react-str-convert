"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSnakeCase = exports.toCamelCase = void 0;
const camelCase_1 = __importDefault(require("./camelCase"));
exports.toCamelCase = camelCase_1.default;
const snakeCase_1 = __importDefault(require("./snakeCase"));
exports.toSnakeCase = snakeCase_1.default;
