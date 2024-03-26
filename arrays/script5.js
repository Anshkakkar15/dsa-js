//  mergin two arrays
let arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 36];
let arr2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// let arr3 = [...arr1, ...arr2];
let arr3 = arr1.concat(arr2);

console.log(arr3);

// let arr1Index = 0;
// let arr2Index = 0;
// let arr3Index = 0;


// console.log(arr3);
// for (let i = 0; i < arr1.length; i++) {
//   //   arr3[i] = arr1[i];
//   arr3.push(arr1[i]);
// }

// for (let i = 0; i < arr2.length; i++) {
//   //   arr3[arr1.length + i] = arr2[i];
//   arr3.push(arr2[i]);
// }

// console.log(arr3);



// using while loop

while (arr1Index < arr1.length || arr2Index < arr2.length) {
  if (arr1Index === arr1.length) {
    arr3[arr3Index] = arr2[arr2Index];
    arr2Index++;
  } else if (arr2Index === arr2.length) {
    arr3[arr3Index] = arr1[arr1Index];
    arr1Index++;
  } else {
    if (arr1[arr1Index] < arr2[arr2Index]) {
      arr3[arr3Index] = arr1[arr1Index];
      arr1Index++;
    } else {
      arr3[arr3Index] = arr2[arr2Index];
      arr2Index++;
    }
  }
  arr3Index++;
}
