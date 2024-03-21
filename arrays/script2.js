// INSERTING AN ELEMENT IN ARRAY

let arr = [11, 66, 77, 88, 99, 44, 22, 55, 88];
let elm = 0;
let postion = 4;

for (let i = arr.length - 1; i >= 0; i--) {
  if (i >= postion) {
    arr[i + 1] = arr[i];
    if (i === postion) {
      arr[i] = elm;
    }
  }

  //   console.log(arr);
}

let arr2 = arr.splice(4, 0, 17312);
console.log(arr2);
