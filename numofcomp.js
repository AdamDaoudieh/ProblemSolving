

function counts(str) {
    const dict = {};
    for (let char of str) {
        dict[char] = (dict[char] || 0) + 1;
    }
    return dict;
}


function allpossible(str) {
    const result = [];

    
    function backtrack(current, charCount) {
        if (current.length === str.length) {
            result.push(current);
            return;
        }
        
        for (let char in charCount) {
            if (charCount[char] > 0) {
                charCount[char]--;
                backtrack(current + char, charCount);
                charCount[char]++;
            }
        }
    }
    
    backtrack('', counts(str));
    return result;
}

console.log(allpossible('abc'));
