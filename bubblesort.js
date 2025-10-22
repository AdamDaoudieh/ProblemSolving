function bubbleSortBasic(arr) {
    const sorted = [...arr];
    
    for (let i = 0; i < sorted.length - 1; i++) {
        for (let j = 0; j < sorted.length - 1; j++) {
            let swap = false;
            if (sorted[j] > sorted[j + 1]) {
                swap = true;
                const temp = sorted[j];
                sorted[j] = sorted[j + 1];
                sorted[j + 1] = temp;
            }
        }
        if (!swap) break;
    }
    
    return sorted;
}

// complexity is O(n^2) because of the nested loop 
