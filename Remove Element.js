/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var dupCount = 0;
    for(var i=0;i<nums.length;i++) {
        if(nums[i] === val) {
            dupCount++;
        }else {
            nums[i-dupCount] = nums[i];
        }
    }
    return nums.length-dupCount;
};
