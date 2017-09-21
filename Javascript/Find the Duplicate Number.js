/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    nums.sort(function(a,b){
        return a-b;
    });
    
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i+1] ) {
            return nums[i];
        }
    }
};
