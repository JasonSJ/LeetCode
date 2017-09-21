/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var low = 0,
        mid,
        high = nums.length - 1; 
    
    while(low < high) {
        mid = parseInt((low + high)/2);
        if(nums[mid] > target) {
            high = mid - 1;
        } else if (nums[mid] === target) {
            low = high = mid;
            break;
        } else {
            low = mid + 1;
        }
    }
    
    if(nums[low] >= target) {
        return low;
    } else {
        return low + 1;
    }
};
