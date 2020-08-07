// codepen link: https://codepen.io/bryantnovas/pen/pogXRpo?editors=0112

const full_names = [
  "Westly Snipes",
  "Nicholas Cage",
  "Nasir Jones",
  "Sean Carter",
  "Sean Combs",
  "Michael Jordan",
  "Patrick Ewing",
];
const first_name = [];
const last_name = [];
let split_names = full_names.map((name) => name.split(" "));
split_names.map((nameArr) => {
  first_name.push(nameArr[0]);
  last_name.push(nameArr[1]);
});

console.log(first_name);
console.log(last_name);
