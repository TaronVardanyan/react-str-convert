import {toCamelCase, toSnakeCase} from '../src';

describe('String Case Converter', () => {
    describe('toCamelCase', () => {
        it('should convert snake_case to camelCase', () => {
            expect(toCamelCase('hello_world')).toBe('helloWorld');
        });

        it('should convert kebab-case to camelCase', () => {
            expect(toCamelCase('hello-world')).toBe('helloWorld');
        });

        it('should convert mixed cases to camelCase', () => {
            expect(toCamelCase('Hello-World_example')).toBe('helloWorldExample');
        });
    });

    describe('toSnakeCase', () => {
        it('should convert camelCase to snake_case', () => {
            expect(toSnakeCase('helloWorld')).toBe('hello_world');
        });

        it('should convert spaces to snake_case', () => {
            expect(toSnakeCase('Hello World')).toBe('hello_world');
        });

        it('should convert mixed cases to snake_case', () => {
            expect(toSnakeCase('helloWorld-Example')).toBe('hello_world_example');
        });
    });
});
