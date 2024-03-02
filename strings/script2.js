// indexing af string

// can use string indexing to access individual characters within a string
var myStr = "Hello world";
// accessing 0 index of string
const firstIndex = myStr[0]; //"H"
const fourthIndex = myStr[4]; //"0"
console.log(firstIndex);
console.log(fourthIndex);

// we can also use negative indexing for accessing last character of string

const lastChar = myStr[myStr.length - 1]; // "d"
const lastSecondChar = myStr[myStr.length - 1]; // "l"
console.log(lastChar);
console.log(lastSecondChar);
