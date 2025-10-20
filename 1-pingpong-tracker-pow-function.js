

// Problem 1
function pow(exponent) {
    return function(number) {
        return Math.pow(number, exponent);
    };
}

// Problem 2
function pingPongTracker() {
    let totalTime = 0; 
    
    return {
        timeSpentPlaying: function() {
            return totalTime;
        },
        playOneGame: function() {
            totalTime += 15;
            return "Game played";
        },
        myLevel: function() {
            if (totalTime < 30) {
                return "I need to improve my game";
            } else if (totalTime <= 100) {
                return "You need to improve your game";
            } else {
                return "Wow, I have wasted a lot of time";
            }
        }
    };
}


