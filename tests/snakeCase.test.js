"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const snakeCase_1 = __importDefault(require("../src/snakeCase"));
test('converts to snake_case', () => {
    expect((0, snakeCase_1.default)('helloWorld')).toBe('hello_world');
    expect((0, snakeCase_1.default)('Hello World')).toBe('hello_world');
});
