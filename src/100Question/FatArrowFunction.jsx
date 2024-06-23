https://www.w3schools.com/react/react_es6_spread.asp


function functionOne() {
  return "Hello World!";
}

// pass const not mandatory
const functionOne1 =() =>{
  return "Hello World! using fat arrow";
}

functionOne = () => "Hello World!"; //one line
console.log(functionOne());


//=========== parameter===========
function add(a, b) {
  return a + b;
}

//convert to fat arrow
addFat = (a, b) => {
  return a+b;
}
console.log(add(12, 3));
console.log(addFat(2, 3));

