/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var current,
        len;
    if(nums.length === 1 || nums.length === 0) {
        return nums;
    }
    
    prev = nums[0]; 
    dupCount = 0;
    
    for(var i=1; i < nums.length; i++) {
        if(prev === nums[i]) {
            dupCount++;
        }else {
            prev = nums[i];
            nums[i - dupCount] = prev;
        }
    }
    return nums.length-dupCount;
};
