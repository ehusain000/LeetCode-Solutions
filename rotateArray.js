/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length;
    //if k is greater than num.length, % will give the remainder steps
    console.log(nums);
    let reverse = function(left, right){
        while(left < right){
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
    };
    
    reverse(0, nums.length-1)
    console.log(nums);
    reverse(0, k-1);
    console.log(nums);
    reverse(k, nums.length-1);
    console.log(nums);  
};

rotate([1,2,3,4,5,6,7], 3);
rotate([-1,-100,3,99], 2);