/*let name = 'Muist';
console.log(name);

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);
*/
//Primitives

/*let person = {
  name: 'Alex',
  age: 22,
};
person.name = 'Paul';

person['name'] = 'Mortii mei';

console.log(person);*/

//Objects
/*
let selectColors = ['red', 'blue'];
selectColors[2] = 'green';
console.log(selectColors.join(' '));

function alert(name, lastName) {
  console.log('Muist de paul' + ' ' + name + ' ' + lastName);
}

alert('si Daniel', 'si Alex');

function square(number) {
  return number * number;
}

console.log(square(2));
*/
/*
function sayHello() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

sayHello();
*/
/*
const person = {
  name: 'Alex',
  walk() {
    console.log(this);
  },
};

person.walk();

const walk = person.walk.bind(person);
walk();
*/
//arrow functions
/*
const square = (number) => {
  return number * number;
};

console.log(square(8));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: true },
  { id: 3, isActive: false },
];

const activeJobs = jobs.filter((job) => {
  return job.isActive;
});

console.log(activeJobs);
*/
/*
const person = {
  talk() {
    var self = this;
    setTimeout(() => {
      console.log('this', this);
    }, 1000);
  },
};

person.talk();
*/
/*
const colors = ['red', 'green', 'blue'];
const items = colors.map((color) => {
  return `<li>${color}</li>`;
});

console.log(items);
*/
/*
const adress = {
  street: '',
  city: '',
  country: '',
};

const { street: st } = adress;
*/
/*
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, ...second];
console.log(combined);
*/
/*
const first = { name: 'Alex' };
const second = { job: 'Smecher' };

const combined = { ...first, ...second };
console.log(combined);
*/

/*const person = {
  name: 'Alex'};*/
/*
class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log('walk');
  }
}

class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log(teach);
  }
}

const teacher = new Teacher('Alex', 'Smecher');
*/
