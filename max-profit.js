


function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

var maximumProfit = function(array) {
    
    if (!array || array.length < 2) {
        return 0;
    }
    
    let minPrice = array[0]; 
    let maxProfit = 0;
    
 
    for (let i = 1; i < array.length; i++) {
        const currentPrice = array[i];
        
     
        const currentProfit = currentPrice - minPrice;
        
  
        maxProfit = Math.max(maxProfit, currentProfit);
        
        
        minPrice = Math.min(minPrice, currentPrice);
    }
    
    return maxProfit;
};


console.log("Test case 1: [100, 80, 120, 130, 70, 60, 100, 125]");
console.log("Expected: 65, Got:", maximumProfit([100, 80, 120, 130, 70, 60, 100, 125]));


