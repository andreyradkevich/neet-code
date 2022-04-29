const isAnagram = (s: string, t: string) => {
  if (s.length !== t.length || s.length <= 1 || t.length !== 1) return false;

  const mapS = new Map();
  const mapT = new Map();

  for (const char of s) {
    mapS.set(char, (mapS.get(char) || 0) + 1);
  }

  for (const char of t) {
    mapT.set(char, (mapT.get(char) || 0) + 1);
  }

  for (const [key, value] of mapS) {
    if (!mapT.get(key) || value !== mapT.get(key)) return false;
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
