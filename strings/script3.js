// iteration of string

let str = "hello world";
for (let i = 0; i <= str.length - 1; i++) {
  //   console.log(str[i]);
}

for (let i in str) {
  // the variable i automatically receives the index so that each character can be accessed
  //   console.log(str[i]);
}

for (let char of str) {
  //  The variable item receives the character directly so you do not have to use the index..
  console.log(char);
}
