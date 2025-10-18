/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum = 0;
    let digitSum = 0;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        elementSum += num;

        // extract digits manually (no String or Number)
        let temp = num;
        while (temp > 0) {
            let digit = temp % 10;   // get last digit
            digitSum += digit;
            temp = (temp - digit) / 10;  // remove last digit
        }
    }

    // manually compute absolute difference (no Math.abs)
    let diff = elementSum - digitSum;
    if (diff < 0) diff = -diff;

    return diff;
};

