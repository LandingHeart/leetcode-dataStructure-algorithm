// Construct a table with table[i] as the length of the longest prefix of the substring 0..i
// create a table of size equal to the length of `str`
// table[i] will store the prefix of the longest prefix of the substring str[0..i]
// the longest prefix of the substring str[0] has length
// for the substrings the following substrings, we have two cases
// case 1. the current character doesn't match the last character of the longest prefix
// if that is the case, we have to backtrack, and try find a character  that will be equal to the current character
// if we reach 0, then we couldn't find a chracter
// case 2. The last character of the longest prefix matches the current character in `str`
// if that is the case, we know that the longest prefix at position i has one more character.
// for example consider `.` be any character not contained in the set [a.c]
// str = abc....abc
// consider `i` to be the last character `c` in `str`
// maxPrefix = will be 2 (the first `c` in `str`)
// maxPrefix now will be 3
// so the max prefix for table[9] is 3
function makeTable(str) {
  let table = new Array(str.length);
  let maxPrefix = 0;

  table[0] = 0;

  for (let i = 1; i < str.length; i++) {
    while (maxPrefix > 0 && str.charAt(i) !== str.charAt(maxPrefix)) {
      maxPrefix = table[maxPrefix - 1];
    }

    if (str.charAt(maxPrefix) === str.charAt(i)) {
      maxPrefix++;
    }
    table[i] = maxPrefix;
  }
  return table;
}

function kmpMatching(str, word) {
  let prefixes = makeTable(word);
  let matches = [];

  let j = 0;
  let i = 0;
  while (i < str.length) {
    if (str.charAt(i) === word.charAt(j)) {
      i++;
      j++;
    }

    if (j === word.length) {
      matches.push(i - j);
      j = prefixes[j - 1];
    } else if (str.charAt(i) !== word.charAt(j)) {
      if (j !== 0) {
        j = prefixes[j - 1];
      } else {
        i++;
      }
    }
  }

  return matches;
}

console.log(kmpMatching("it impolies that it is very important", "impo"));
