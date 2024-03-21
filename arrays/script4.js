let data = [15, 6, 99, 55, 77, 35, 47, 12, 57];
let elm = 77;
let position = undefined;
for (let key in data) {
  if (data[key] === elm) {
    position = key;
    break;
  }
}
console.log(position);

// data.splice(5, 2, 66, 99, 88);
// console.log(data);
