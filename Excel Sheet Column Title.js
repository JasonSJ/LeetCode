/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var title = '';
    
    while(n > 0) {
        var m = (n % 26);
        if(m === 0 ) {
            n -= 26;
            m = 26;
        } 
        title = String.fromCharCode(m + 64) + title;
        n = parseInt(n / 26);
    }
    
    return title;
};
