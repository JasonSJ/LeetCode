/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {

	while (num.toString().length > 1) {
		num = num.toString().split('').reduce((prev, next) => {
			return parseInt(prev) + parseInt(next);
		});
	}
	return num;
};
