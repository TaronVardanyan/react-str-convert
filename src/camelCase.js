"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toCamelCase(str) {
    return str
        .replace(/[-_](.)/g, (match, group1) => group1.toUpperCase())
        .replace(/^(.)/, (match, group1) => group1.toLowerCase());
}
exports.default = toCamelCase;
