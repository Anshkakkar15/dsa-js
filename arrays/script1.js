// traversing and accessing an array

// traversing
let arr = [1, 5, 8, 66, 99, 77, 33, 44, 45];
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

// accessing
let x = 2;
// console.log(arr[x]);

const input = prompt("enter the value");
// console.log(input);

if (
  input < arr.length &&
  typeof parseInt(input) === "number" &&
  parseInt(input) >= 0
) {
  console.log(arr[input]);
} else {
  alert("enter a valid input");
}
