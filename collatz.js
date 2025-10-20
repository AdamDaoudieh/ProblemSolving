


function collatz(x) {
    let steps = 0;
    while(x != 1) {

    if(x % 2 == 0) {
        x = x / 2;
        steps++;
    } else {
        x = 3 * x + 1;
        steps++;
    }
 }
 return steps;
}

function longestCollatz(limit) {
    let maxSteps = 0;
    let bestNumber = 0;
    
    //technically even numbers will always reach 1 faster than odd numbers so we can skip even numbers to make this faster
    for(let i = 1; i < limit; i+=2) {
        let steps = collatz(i);
        if(steps > maxSteps) {
            maxSteps = steps;
            bestNumber = i;
        }
    }
    
    return bestNumber;
}