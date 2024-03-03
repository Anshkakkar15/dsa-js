//  Concatenate Strings
// using + operator
let str1 = "hello";
let str2 = " ";
let str3 = "world";
let str4 = str1 + str2 + str3;
// console.log(str4);

// using  +=

let str = "hllo";
str += " ";
str += "world";
console.log(str);

// we can also concatinate undefined , object and null to string

let a = "hello";
let b = {};
let c = undefined;
let d = null;
let e = a + b + c + d;
console.log(e); //hello[object Object]undefinednull

// using array.join()

// without seprator
let x = ["a", "b", "", "c"].join(); // 'a,b,c'
console.log(x);

// with seprator
let aa = ["hello", " ", "world"].join(""); //hello world
console.log(aa);

// using concat()

let str11 = "hello";
// The concat() function takes one or more parameters, and returns the modified string.
let str22 = str11.concat(" ", "world");
console.log(str22);

// The downside of using concat() is that you must be certain str1 is a string. You can pass non-string parameters to concat(), but you will get a TypeError if str == null.

let n = null;
let z = n.concat(" ", "ello");
//  Cannot read properties of null (reading 'concat')
console.log(z);
