/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var len = nums.length,
        sum = len;
    for(var i = 0; i < len; i++) {
        sum += i - nums[i];
    }
    
    return sum;
};
