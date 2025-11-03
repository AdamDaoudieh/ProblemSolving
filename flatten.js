function flatten(...args) {
    const result = [];
    
    for (let arg of args) {
        if (Array.isArray(arg)) {
            result.push(...flatten(...arg));
        } else {
            result.push(arg);
        }
    }
    
    return result;
}