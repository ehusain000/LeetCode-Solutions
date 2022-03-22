/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    for(let start = 0, end = numbers.length-1; start < end;){
     let sum = numbers[start]  + numbers[end];
        if(sum == target) {return [++start, ++end]}
        else{sum > target ? end--: start++};
    }
};

console.log(twoSum([2,7,11,15],9));
/*
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. 
Therefore, index1 = 1, index2 = 2. We return [1, 2].
*/

console.log(twoSum([2,3,4],6));
/*
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. 
Therefore index1 = 1, index2 = 3. We return [1, 3].
*/


console.log(twoSum([-1,0],-1));
/*
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. 
Therefore index1 = 1, index2 = 2. We return [1, 2].
*/


//another solution(less optimal)

/*
var twoSum = function(numbers, target) {
    let start = 0, end = numbers.length-1;
    
    while(start < end){
        sum = numbers[start] + numbers[end];
        if (sum == target){
            return [start + 1, end + 1];
        }else if(sum > target){
            end--;
        }else{
            start++;
        }
    }
    return -1;
    
    };
*/