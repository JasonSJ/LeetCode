/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var dp = [];
    
    for(var i = 0; i <= nums.length; i++) {
        if(i === 0) {
            dp[i] = 0;
        }
        else if(i === 1) {
            dp[i] = nums[0];
        }
        else if(i === 2) {
            dp[i] = Math.max(nums[0],nums[1]);
        }
        else {
            dp[i] = Math.max(nums[i-1]+dp[i-2],dp[i-1]);
        }
    }
    
    return dp[nums.length];
};
