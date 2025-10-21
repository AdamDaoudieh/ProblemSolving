/*

for this problem i couldnt think of a way to do it except a nested loop which was takiong too long so after some research i found a mathematical solution to this problem
                 
             f(n, k) = f(n, k-1) + f(n - coins[k], k) 
             
N being the number of ways to make the amount using k which is the coin value then combining each N we get to get the total of ways to make the amount

*/

function coinCombination(amount) {
    const coins = [1, 2, 5, 10, 20, 50, 100, 200];
    const dp = Array(amount + 1).fill(0);
    dp[0] = 1;
    
    
    coins.forEach(coin => {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        }
    });
    
    return dp[amount];
}

console.log(coinCombination(200));