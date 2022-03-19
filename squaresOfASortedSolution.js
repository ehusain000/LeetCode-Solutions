/**
 * @param {number[]} nums
 * @return {number[]}
 */

    /*
    * given an array nums sorted in a non-decreasing order, 
    * we want to return an array of the squares of each number sorted in
    * non-decreasing or increasing order
    */
    
    /*
    * say a given array: nums = [-4, -1, 0, 3, 10]
    * we want the output to be [0, 1, 9, 16, 100]
    * after squaring, the array becomes [16, 1, 0, 9, 100]
    * after sorting it becomes [0, 1, 9, 16, 100]
    * or nums = [-7, -3, 2, 3, 11]
    * after squaring, the array becomes [49, 9, 4, 9, 121]
    * after sorting it becomes [4,9,9,49,121]
    */
    
    /*
    *1)specification
    *pre cond: inputs an array nums sorted in a non-decreasing order, 
    *post cond:return an array of the squares of each number sorted in
    * non-decreasing or increasing order
    */
    
    /*
    *2)Design Idea:
    *create an array, result with the same size as nums
    *two vars to keep track of right and left indexes
    *we need to use some kind of absulate value functions that
    *abs(value) the array value to compare values.
    */

    //3)code
var sortedSquares = function(nums) {
    
    //create a new array
    const result = new Array(nums.length);
    
    //left and right index
    let left = 0, right = nums.length-1;
    
    //we will not rearrange the array
    //rather we will iterate in a decending order
    for (let i= nums.length-1; i >= 0; i--){
        if(Math.abs(nums[left]) < Math.abs(nums[right])){
           result[i] = nums[right] ** 2;
        right--;
           }else{
               result[i] = nums[left] ** 2;
               left++;
           }
    }
    
    return result;
};

//4) testing
console.log(sortedSquares([-4, -1, 0, 3, 10]));
//outputs
//[ 0, 1, 9, 16, 100 ]
console.log(sortedSquares([-7, -3, 2, 3, 11]));
//outputs
//[ 4, 9, 9, 49, 121 ]


//5) Proof

//6) termination condition
/*
* as left starts as 0 and right starts as nums.length-1
* at each iterative call, left increments by 1 and right decrements by 1
* and eventually they equal each other

* or we start i as size of the array nums and then at each iterative
; i decreases by 1. eventually i becomes 0 which terminates the program.
*
*/