/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var hash = {};
    return nums.some(function(item){
        if(hash[item]) {
            return true;
        }else {
            hash[item] = true;
            return false;
        }
    })
};
