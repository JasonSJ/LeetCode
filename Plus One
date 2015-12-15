/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var i = digits.length - 1;
    
    digits[i] = digits[i] + 1;
    
    if(digits[i] < 10 ) {
        return digits;
    }
    
    for(; i >= 0; i--) {
        if(digits[i] >= 10) {
            if(i===0) {
                digits[i] = 0;
                digits.unshift(1);
            }else {
                digits[i] = 0;
                digits[i-1] = digits[i-1] + 1;
            }
           
        }
    }
    
    return digits;
};
