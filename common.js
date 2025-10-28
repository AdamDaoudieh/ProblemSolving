function commonCharacters(str1, str2) {
    const charCount = {};
    
    
    for (let char of str1) {
        if (char !== ' ') {
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }
    
    for (let char of str2) {
        if (char !== ' ') {
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }
    
    const seen = {};
    let result = '';
    
    for (let char of str1) {
        if (char !== ' ' && charCount[char] >= 2 && !seen[char]) {
            result += char;
            seen[char] = true;
        }
    }
    
    return result;
}


console.log(commonCharacters('acexivou', 'aegihobu'));