const ex1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const ex2 = [""];
const ex3 = ["a"];

const groupAnagrams = (arr: string[]) => {
  const hash: { [key: number]: string[] } = {};

  arr.forEach((str) => {
    let charsSum = 0;

    for (let char of str) {
      charsSum += char.charCodeAt(0);
    }

    if (hash[charsSum]) {
      hash[charsSum] = hash[charsSum].concat(str);
    } else {
      hash[charsSum] = [str];
    }
  });

  return Object.entries(hash).map(([_, arr]) => arr);
};

console.log(groupAnagrams(ex1)); // [["bat"], ["eat", "tea", "ate"], ["tan", "nat"]]
console.log(groupAnagrams(ex2)); // [[""]]
console.log(groupAnagrams(ex3)); // [["a"]]
