const str = "Hello Dev Newbs!";

// length of the string
"Length: " + str.length; // Length: 16
// getting the whole string
str.substring(); // Hello Dev Newbs!
str.slice(); // Hello Dev Newbs!
// start extraction at position 6
str.substring(6); // Dev Newbs!
str.slice(6); // Dev Newbs!
// start extraction at position 10 & end at position 14
str.substring(10, 15); // Newbs
str.slice(10, 15); // Newbs

// start position is greater than end position
// swaps the two parameters
str.substring(9, 6); // Dev
// returns empty string
str.slice(9, 6); // empty string
// negative value as position
// defaults to value 0 for both parameters
str.substring(-6, -1); // empty string
// counts backwards from the end
str.slice(-6, -1); // Newbs
// negative position & swapping at the same time
// change -1 -> 0 & swap (6,0) -> (0,6)
str.substring(6, -1); // Hello
// starts at 6 and ends at 15 (16 - 1)
str.slice(6, -1); // Dev Newbs
