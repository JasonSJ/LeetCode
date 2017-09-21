/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var paths = 1,
        pathsDup = 1,
        sum = m + n - 2;
    for(var i = 1 ; i < m; i++) {
        paths = paths * sum ;
        pathsDup = pathsDup * i;
        sum--;
    }
    
    return paths/pathsDup;
};
