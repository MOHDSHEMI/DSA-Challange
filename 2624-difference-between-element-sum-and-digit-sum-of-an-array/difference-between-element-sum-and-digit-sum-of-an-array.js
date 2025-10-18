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

       
        let temp = num;
        while (temp > 0) {
            let digit = temp % 10;   
            digitSum += digit;
            temp = (temp - digit) / 10; 
        }
    }

   
    let diff = elementSum - digitSum;
    if (diff < 0) diff = -diff;

    return diff;
};

