/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var left = 0, right = nums.length -1;
    
    while(left <= right){
        var mid = Math.floor((left + right)/2);
        
        if(target === nums[mid]) return mid;
        
        if(target< nums[mid]){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return left;
};