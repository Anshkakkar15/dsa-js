var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < t.length; j++) {
      if (
        (s[i] === s[j] && t[i] !== t[j]) ||
        (s[i] !== s[j] && t[i] === t[j])
      ) {
        return false;
      }
    }
  }
  return true;
};

console.log(isIsomorphic("aa", "ab"));
