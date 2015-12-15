/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var i,
        profit = 0;
    if(prices.length ===0 || prices.length === 1) {
        return profit;
    }
    for(i = 1; i < prices.length; i++) {
        if(prices[i] > prices[i-1]) {
            profit += prices[i] - prices[i-1];
        }
    }
    
    return profit;
};
