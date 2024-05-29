# String Case Converter

A simple npm package to convert strings to different cases such as camelCase and snake_case.

## Installation

```sh
npm install string-case-converter
```

To use String Case Converter in your project, simply import the functions you need and call them with the desired string
input.

```
import { toCamelCase, toSnakeCase } from 'string-case-converter';

// Convert to camelCase
const camelCaseString = toCamelCase('hello_world'); // helloWorld
console.log(camelCaseString);

// Convert to snake_case
const snakeCaseString = toSnakeCase('helloWorld'); // hello_world
console.log(snakeCaseString);
```
