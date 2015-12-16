/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var left = [],
        right = [],
        i;
    for(i = 0; i < nums.length; i++) {
        if(i === 0) {
            left[i] = 1;
        } else {
            left[i] = left[i-1] * nums[i-1];    
        }
        //console.log("i:%s,left[i]:%s\n",i,left[i])
    }
    
    for(i = nums.length - 1; i >= 0 ; i--) {
        if(i === nums.length - 1) {
            right[i] = 1;
        } else {
            right[i] = right[i+1] * nums[i+1]
        }
        //console.log("i:%s,right[i]:%s\n",i,right[i])
        left[i] = left[i] * right[i];
    }
    
    return left;
};
