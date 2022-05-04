const ex1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const ex2 = [""];
const ex3 = ["a"];
const ex4 = ["ac", "bb"];

const groupAnagrams = (arr: string[]) => {
  const hash: { [key: number]: string[] } = {};

  arr.forEach((str) => {
    const c: number[] = Array(26).fill(0);

    for (let char of str) {
      c[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    const count = c.toString();

    if (hash[count]) {
      hash[count] = hash[count].concat(str);
    } else {
      hash[count] = [str];
    }
  });

  return Object.entries(hash).map(([_, arr]) => arr);
};

console.log(groupAnagrams(ex1)); // [["bat"], ["eat", "tea", "ate"], ["tan", "nat"]]
console.log(groupAnagrams(ex2)); // [[""]]
console.log(groupAnagrams(ex3)); // [["a"]]
console.log(groupAnagrams(ex4)); // [["ac"], ["bb"]]
