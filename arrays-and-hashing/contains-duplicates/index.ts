const ex1 = [1, 2, 3, 1];
const ex2 = [1, 2, 3, 4];
const ex3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

const isDuplicate: <T>(arr: T[]) => boolean = (arr) => {
  const set = new Set();

  for (let element of arr) {
    if (!set.has(element)) {
      set.add(element);
    } else {
      return true;
    }
  }

  return false;
};

console.log(isDuplicate(ex1)); // true
console.log(isDuplicate(ex2)); // false
console.log(isDuplicate(ex3)); // true
