/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let n = nums.length;
       let ans = [];

    for (let i=0;i<n;i++){
        ans[i]=nums[i]
    }

    for(let i=0;i<n;i++){
        ans[i+n]=nums[i]
    }

    return ans;
};

getConcatenation([1,2,1])