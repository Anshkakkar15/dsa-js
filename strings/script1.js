// strings immutable nature

/* once strings are defined it cannot be changed */

var str = "hello world";

str.toUpperCase(); // it will return a new string
console.log(str); // at that time result will be same as "hello world" because of immutable nature

/* if want to get the "HELLO WORLD" we need a new variable for it */

var upperCaseString = str.toUpperCase(); // it will return a new "HELLO WORLD"
console.log(upperCaseString);

// We also cannot assign a new character to an index in String by square bracket notation.
str[0] = "i";
console.log(str);
