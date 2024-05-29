import toCamelCase from '../src/camelCase';

test('converts to camelCase', () => {
    expect(toCamelCase('hello_world')).toBe('helloWorld');
    expect(toCamelCase('Hello-World')).toBe('helloWorld');
});
