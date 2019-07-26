// let and const
let myName = "Max";
console.log(myName);

myName = 'Manu';
console.log(myName);

// arrow functions

const printMyName = (name, age) => {
  console.log(name, age);
}

printMyName('Max', 28);

// classes, properties, methods

class Human {
  gender = 'male';
  printMyGender = () => {
    let testMe = 'test';
    console.log(this.gender);
    console.log(testMe);
  }
}

class Person extends Human{
    name = 'Max';
    gender = 'Female'

  printMyName = () => {
    console.log(this.name);
  }
}
const person = new Person();
person.printMyName();
person.printMyGender();

// spread and rest
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

const personOld = {
  name: 'Max'
};

const newPerson = {
  ...personOld,
  age: 28
}

console.log(newPerson);

const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3));

// destructuring

[a,b] = ['Hello', 'Max'];
console.log(a);
console.log(b);

//const numbers = [1, 2, 3];
[num1, ,num2] = numbers;
console.log(num1); // 1
console.log(num2); // 3

// object destructuring is not supported in jsbin

const num = 1;
const num2 = num;

// creates a real copy
// num, string, boolean is primitive
console.log(num2);

//const person = new Person();
// does a deep copy as opposed to shallow
const secondPerson = {
  ...person
};
person.name = 'Manu';
console.log(secondPerson);
