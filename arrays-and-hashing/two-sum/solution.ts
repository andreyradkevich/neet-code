const nums1 = [2, 7, 11, 15],
  target1 = 9;
const nums2 = [3, 2, 4],
  target2 = 6;
const nums3 = [3, 3],
  target3 = 6;

const twoSumm = (nums: number[], target: number) => {
  const numIndexPairs: { [key: string]: number } = {};

  if (nums.length < 2) return [];

  for (let i = 0; i < nums.length; i++) {
    const value = target - nums[i];
    const index = numIndexPairs[value];

    if (index >= 0) {
      return [index, i];
    } else {
      numIndexPairs[nums[i]] = i;
    }
  }

  return [];
};

console.log(twoSumm(nums1, target1)); // [0, 1]
console.log(twoSumm(nums2, target2)); // [1, 2]
console.log(twoSumm(nums3, target3)); // [0, 1]
