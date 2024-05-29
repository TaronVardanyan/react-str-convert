function toCamelCase(str: string): string {
    return str
        .replace(/[-_](.)/g, (match, group1) => group1.toUpperCase())
        .replace(/^(.)/, (match, group1) => group1.toLowerCase());
}

export default toCamelCase;
