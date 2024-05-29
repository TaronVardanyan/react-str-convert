import toSnakeCase from '../src/snakeCase';

test('converts to snake_case', () => {
    expect(toSnakeCase('helloWorld')).toBe('hello_world');
    expect(toSnakeCase('Hello World')).toBe('hello_world');
});
