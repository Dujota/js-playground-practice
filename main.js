
// test that prints to console
console.log('Hello World!!!!!');


// for loops
for (var i = 0; i < 10; i++) {
  // what we want to happen for each iteraion of the loop
  console.log(`for loop ${i}`); // prints 0-9 in the console
};


// while loop
let count = 0 // need to define the variable outside the loop first before we can use it
while (count < 15) {
  console.log(`While loop counting # ${count}`);
  count++ // we need to make sure that the counter increments
};

// forEach loop are meant for arrays specifically
const numbers = [33,54,76,34,2,6];

  numbers.forEach((number) => {
    console.log(`forEach loop on array ${number}`);
  });

// can use for loops with arrays as well

for (var i = 0; i < numbers.length; i++) {
  console.log(`for loop on array ${numbers[i]}`);
};


// Conditionals

// if statement

if (1 === 1) {
  console.log('this is true 1 === 1');
};

if (1 != 2) {
  console.log('1 is not equal != 2 ');
};

let num1 = 3;
let num2 = 4;

if (num1 === num2) {
  console.log("this will never load");
} else {
  console.log("num1 is not equal to num2");
}


if (num1 === num2 || num1 === 3) {
  console.log(`this code is running becuase of || num1 = 3 condition`);
} else {
  console.log(`this code will never run`);
}


// switch statements

// if we change the value that is assigned to fruit, it will run the code for the corresponding case
// if nothing is met in the case, then it will run the default
let fruit = `melon`

switch (fruit) {
  case `banana`:
    alert('i have bananas');
    break;
  case `apple`:
    alert('i love apples! ');
    break;
  case `orange`:
    alert('Oranges are ok');
    break;
  default:
    alert('i love all other fruits');
  break;
}


// Objects

// object literal
const person = {
  first_name: 'Brad',
  last_name: 'Traversy',
  age: '33',
  children: ['Jimmy', 'Tammy'],
// imbedded object in a an object
  address: {
    street: '555 something st',
    city: 'Boston',
    state: 'MA'
  },
  // imbedded function in an object
  full_name: function () {return `${this.first_name} ${this.last_name}`}
  // the keyword this. refers to current object that the function is in, which in this case is person.
}

// objects use .notation
console.log(`We access the properties of an object by using the .property, this case its person.first_name ${person.first_name}`);


console.log(`access the children array inside person object using person.children[index] ${person.children[0]}`);

// we can loop through the imbedded array
// forEach
person.children.forEach((child) => {return console.log(child);
});

//
person.children.map((child) => {return console.log(child);
});

person.children.filter((child) => {
  return console.log(child);
});

console.log(`access the imbedded object using person.object ${person.address}`);
console.log(person.address);
console.log(person.address.state);

// if calling the function back from the object we need to invoke it with function ()
console.log(person.full_name());


// Object Constructor

const apple = new Object();  // creates the object like in ruby class
apple.color = 'red';  // this gives the object some properties like @variable in ruby class
apple.shape = 'round';

apple.describe = function() {
  return `An apple is the color ${this.color} and is the shape ${this.shape}`;
};  // we can imbed functions to the object and ivoke it later

console.log(apple);
console.log(apple.red);
console.log(apple.shape);
console.log(apple.describe()); // we need to invoke it as well

// downfall is that we need to build a new fruit every time and give it properties, there is a simpler way to create objects (classes) using Constructor pattern


// Constructor Pattern

// parameters passed in will be the properties of the new object (class) works like initialize
function Fruit(name, color, shape) {
  this.name = name
  this.color = color
  this.shape = shape
  // same way we enbedded a function we can call it or describe the function any way we want as a property of the object and can be dynamic when we create different instances of that object
  this.describe = function () {
    return `A ${this.name} is the color ${this.color} is the shape ${this.shape}`
  }
}

// we just do one line of code instead of the object Constructor
const apple2 = new Fruit('apple', 'red', 'round')
const melon = new Fruit('melon', 'green', 'oval')
console.log(apple2);

console.log(apple2.describe());
console.log(melon.describe());


// arrays of Objects

const users = [
  {
    name: 'John Doe',
    age: '30'
  },
  {
    name: 'Mark Smith',
    age: '44'
  },
  {
    name: 'Shelly Williams',
    age: '20'
  }
]
// can use the same .attribute and loop methods we used above
console.log(users);
console.log(users[0]);
console.log(users[0].name);

console.log(`-----`);

// es6 display n ECMAScript 2015 aka ES6, you can use a for..of loop to loop over an array of objects.
//
// for (let item of items) {
//     console.log(item); // Will display contents of the object inside the array
// }

for (let user of users) {
  console.log(user);
}

// we can then access the properties of each object as usual
for (let user of users) {
  console.log(user.name);
  console.log(user.age);
}

console.log(`-------------`);
// looping through the same array using forEach
users.forEach((user) => {
  console.log(user.name);
});
console.log(`--------------`);


// EVENTS!!! the most important part to know, this is what makes the javascript language so good to make webpages interactive
