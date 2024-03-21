// case conversion
var array2 = ["melon", "banana", "apple", "orange", "lemon"];
array2 = array2.map(function (x) {
  return x.toUpperCase();
});
console.log(array2); // ["MELON", "BANANA", "APPLE", "ORANGE", "LEMON"];

// trimming
function trimArray(array) {
  return array.map((element) => element.trim());
}

const arr = trimArray(["  bobby ", " hadz ", "  com "]);

console.log(arr); // [ 'bobby', 'hadz', 'com' ]

// split  it takes an string
ages = "12 25 35 47 38 15 7 20";
function below(ages) {
  return ages.split(" ");
}
console.log(below(ages)); // ["12", "25", "35", "47", "38", "15", "7", "20"];

// join   it takes an array
function join(ages) {
  return ages.join("-");
}
console.log(join(below(ages))); //12-25-35-47-38-15-7-20
