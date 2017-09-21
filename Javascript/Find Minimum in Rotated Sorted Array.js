/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    return search(nums,0,nums.length-1);
};

function search(nums,i,j) {
    if(i === j) {
        return nums[i];
    } else {
        var middle = parseInt((i+j)/2);
        console.log(i,j,middle);
        return Math.min(search(nums,i,middle),search(nums,middle+1,j));
    }
}
