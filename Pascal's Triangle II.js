/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
	var prev = [],
	    cur = [],
		i,
		j;
	for (i = 0; i < rowIndex + 1; i++) {
	    prev = cur;
		cur = [];
		for (j = 0; j <= parseInt(i / 2); j++) {
			if (j === 0) {
				cur[i - j] = cur[j] = 1;
			} else {
				cur[i - j] = cur[j] = prev[j - 1] + prev[j];
			}

		}
	}

	return cur;

};
