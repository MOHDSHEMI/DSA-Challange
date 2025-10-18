/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    
    let rem = n%2;
    if(rem===0){
        return n;
    }else{
        return n*2;
    }
};