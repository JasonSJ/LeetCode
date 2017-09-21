/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
	var triangle = [],
		i,
		j;
   for(i = 0; i < numRows ; i++) {
   		triangle[i] = [];
   		for(j = 0; j <= parseInt(i/2); j++) {
   			if(j === 0) {
   				triangle[i][i-j] = triangle[i][j] = 1;   				
   			} else {
   			    triangle[i][i-j] = triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
   			}

   		}
   } 

   return triangle;
};
