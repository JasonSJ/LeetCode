/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var i,
        num = 0,
        power = 1;
    for(i = s.length - 1;i >= 0; i--) {
        if( i !== (s.length - 1)) {
            power *= 26;
        }
        num += (s[i].charCodeAt() - 64) * power;
    }
    return num;
};
