/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var majorityAssume,
        count = 0;
    
    for(var i = 0; i < nums.length; i++) {
        if(count === 0) {
            majorityAssume = nums[i];
            count = 1;
        } else {
          if(majorityAssume === nums[i]) {
              count++;
          } else {
              count--;
          }
        }
    }
    
    return majorityAssume;
};
