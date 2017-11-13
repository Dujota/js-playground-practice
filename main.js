
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

console.log(`access the imbedded object using person.object ${person.address}`);
console.log(person.address);
console.log(person.address.state);

// if calling the function back from the object we need to invoke it with function ()
console.log(person.full_name());
