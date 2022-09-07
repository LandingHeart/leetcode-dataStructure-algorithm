let nums = [10, 9, 2, 5, 3, 7, 101, 18];
// LongestIncreasingSubSequence
function LongestIncreasingSubSequence(nums) {
  let dp = [];
  let max = 1;
  for (let i = 0; i <= nums.length - 1; i++) {
    dp[i] = 1;
  }

  for (let j = 1; j < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      if (nums[j] > nums[i]) {
        console.log(dp);
        dp[j] = Math.max(dp[i] + 1, dp[j]);
        max = Math.max(dp[j], max);
      }
    }
  }
  //   console.log(dp);
  return max;
}

console.log(LongestIncreasingSubSequence(nums));
