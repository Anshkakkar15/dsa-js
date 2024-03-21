// Replace character

// let string = "hello world this is going to replace";

// function replaceStr(text, char) {
//   string = string.trim().split(" ");
//   let replacedStr = "";
//   string.forEach((element) => {
//     element?.toLowerCase() === text?.trim()?.toLowerCase()
//       ? (replacedStr += char + " ")
//       : (replacedStr += element + " ");
//   });
//   return replacedStr;
// }

// const newStr = replaceStr(" this ", "that");
// console.log(newStr);

// trimming

// const trimmedString = trimString(originalString);
// console.log(trimmedString); // Output: "Hello, World!"

// const originalString = "   Hello, World!   ";
// function trimString(string) {
//   const trimmedStr = string.trim();
//   return trimmedStr;
// }

// const trimmedString = trimString(originalString);
// console.log(trimmedString);
// console.log(originalString);

// const originalString = "###Hello, World!###";
// function trimmedString(str, trimedChar) {
//   let newStr = "";
//   for (const key in str) {
//     if (str[key] === trimedChar) {
//       continue;
//     } else {
//       newStr += str[key];
//     }
//   }
//   return newStr;
// }

// const trimStr = trimmedString(originalString, "#");
// console.log(trimStr);

// const str = "helloworld";

// function reverseStr(string) {
//   let newStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr = newStr + string[i];
//   }
//   console.log(newStr);
// }
// reverseStr(str);

// const str = "hello world";
// function reverseStr(string) {
//   //   const arrFromstr = str.split(" ");
//   //   let newStr = "";
//   //   for (let i = arrFromstr.length - 1; i >= 0; i--) {
//   //     newStr += arrFromstr[i] + " ";
//   //   }
//   //   console.log(newStr);

//   let newStr = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     newStr = newStr + string[i];
//   }
//   console.log(newStr);
// }
// reverseStr(str);

//

//  Palindrome

// let string = "121";

// function isPalindrome(str) {
//   str = str.toLocaleString().toLowerCase();
//   let newStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   const result = newStr === str;
//   return result;
// }

// const res = isPalindrome(string);
// console.log(res);

// anagram

// const areAnagrams = (str1, str2) => {
//   const strArr1 = str1.split("").sort();
//   const strArr2 = str2.split("").sort();
//   if (strArr1.length === strArr2.length) {
//     for (let i = 0; i < strArr1.length; i++) {
//       if (strArr1[i] === strArr2[i]) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//   } else {
//     return false;
//   }
// };

// console.log(areAnagrams("listen", "silent"));

// longest substring
const str = "pwwkew";

// function longestSubstring(s) {
//   if (!s) {
//     return false;
//   }
//   let start = 0;
//   let end = 0;
//   let maxLen = 0;

//   let uniqueChar = new Set();
//   while (end < s.length) {
//     if (!uniqueChar.has(s[end])) {
//       uniqueChar.add(s[end]);
//       end++;
//       maxLen = Math.max(maxLen, uniqueChar.size);
//     } else {
//       uniqueChar.delete(s[start]);
//       start++;
//     }
//   }
//   return maxLen;
// }
// console.log(longestSubstring(str));
