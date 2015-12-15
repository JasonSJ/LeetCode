/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var i,
        zeroCount = 0;
    
    for(i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            zeroCount++;
        }else {
            nums[i-zeroCount] = nums[i];
        }
    }
    
    for(i = nums.length - 1; i > nums.length - 1 - zeroCount; i--) {
        nums[i] = 0;
    }
};
