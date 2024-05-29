"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toSnakeCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/[\s-]+/g, '_')
        .toLowerCase();
}
exports.default = toSnakeCase;
