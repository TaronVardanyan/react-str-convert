"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const camelCase_1 = __importDefault(require("../src/camelCase"));
test('converts to camelCase', () => {
    expect((0, camelCase_1.default)('hello_world')).toBe('helloWorld');
    expect((0, camelCase_1.default)('Hello-World')).toBe('helloWorld');
});
