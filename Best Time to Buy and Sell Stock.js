/** hint:
 * fuck it! Note the distinction between "Best Time to Buy and Sell Stock II" and Best "Time to Buy and Sell Stock"
 * "If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock)"
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var dp,
        nMin;
    if(prices.length === 0 || prices.length === 1) {
        return 0;
    }
    dp = [];
    dp[0] = 0;
    dp[1] = (prices[1] - prices[0]) > 0 ? prices[1] - prices[0]: 0;
    nMin = Math.min(prices[0],prices[1]);
    for(var i = 2; i < prices.length; i++) {
        nMin = Math.min(prices[i],nMin);
        dp[i] = Math.max(prices[i]-nMin,dp[i-1]);
    }
    
    return dp[prices.length - 1];
    
};
