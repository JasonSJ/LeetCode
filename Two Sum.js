/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash = {};
    for(var i = 0; i < nums.length; i++) {
        if(hash[target - nums[i]]) {
            return [hash[target-nums[i]],i+1]; 
        } else {
            hash[nums[i]] = i + 1;
        } 
    }
};
