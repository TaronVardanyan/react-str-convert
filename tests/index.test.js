"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe('String Case Converter', () => {
    describe('toCamelCase', () => {
        it('should convert snake_case to camelCase', () => {
            expect((0, src_1.toCamelCase)('hello_world')).toBe('helloWorld');
        });
        it('should convert kebab-case to camelCase', () => {
            expect((0, src_1.toCamelCase)('hello-world')).toBe('helloWorld');
        });
        it('should convert mixed cases to camelCase', () => {
            expect((0, src_1.toCamelCase)('Hello-World_example')).toBe('helloWorldExample');
        });
    });
    describe('toSnakeCase', () => {
        it('should convert camelCase to snake_case', () => {
            expect((0, src_1.toSnakeCase)('helloWorld')).toBe('hello_world');
        });
        it('should convert spaces to snake_case', () => {
            expect((0, src_1.toSnakeCase)('Hello World')).toBe('hello_world');
        });
        it('should convert mixed cases to snake_case', () => {
            expect((0, src_1.toSnakeCase)('helloWorld-Example')).toBe('hello_world_example');
        });
    });
});
