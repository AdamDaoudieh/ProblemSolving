//Problem 1
Array.prototype.myMap = function(callback) {
    const result = [];
    
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    
    return result;
};

var transform = function(element, index, array) {
    return array[index] + index + element;
};

console.log(["a", "b", "c"].myMap(transform)); 
Array.prototype.myMap = function(callback) {
    const result = [];
    
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    
    return result;
};

   
var transform = function(element, index, array) {
    return array[index] + index + element;
};

console.log(["a", "b", "c"].myMap(transform)); 

//Problem 2
function asyncSum(num1, num2, callback) {
    setTimeout(() => {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            callback("Error: Incorrect argument(s)");
        } else {
            const sum = num1 + num2;
            callback(`The total is: ${sum}`);
        }
    }, 1000);
}

function logNumber(message) {
    console.log(message);
}
//Problem 2
asyncSum(10, 7, logNumber);    
asyncSum(10, "B", logNumber);  

//Did not have enough time to complete the problem 3