function binarySearch(array, target) {
    let left = 0;
    let right = array.length ;
    let result = 0;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (array[mid] === target) {
            result = mid + 1;
            right = mid - 1;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}


console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12 ,13 ,14 ,15 ,16 ,17 ,18 ,19 ,20 ,21], 9));