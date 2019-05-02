// Describe a car using a JS object. It must contain
// - model
// - price
// - owner
// - description

// function Car (model, price, owner, description) {
//   this.model = model;
//   this.price = price;
//   this.owner = owner;
//   this.description = description;
// }

function Car (...args) {
  const [model, price, owner, description] = args;
  this.model = model;
  this.price = price;
  this.owner = owner;
  this.description = description;
}


let firstCar = new Car('Chevy Camaro \'69', 50000, 'Mr. Robinson', 'this is a classic muscle american car')
let secondCar = new Car('Aro', 1000, '\'Nea Popescu', 'o rabla');

console.log(firstCar);


// Build a function that takes a car object as an argument and return a formatted string as follows:
// <Model> costs <price> and is owned by <owner>

function carDescription(car) {
  const {model, price, owner, description} = car;
  return `${model} costs ${price} and it is owned by ${owner}`;
}

carDescription(firstCar);
console.log(carDescription(firstCar));


// Build a function that takes an array of car objects and returns a new array with each entry having the price increased by a given amount

// function CarCollection (firstCar, secondCar) {
//   this.firstCar = firstCar;
//   this.secondCar = secondCar;
// }


let cars = [firstCar, secondCar];

function increaseCarPrice (cars) {
  return cars.map(car => car.price + 1000);
}

increaseCarPrice(cars);
console.log(increaseCarPrice(cars));


// Compute the total price for an array of cars
// using Map
function totalCarsPrice (cars) {
  let price = 0;
  cars.map(car => price += car.price);
  return price;
}

totalCarsPrice(cars);
console.log(totalCarsPrice(cars));

// using Reduce
const totalCarPriceReduce = cars => cars.reduce((acc, curr) => acc.price + curr.price);
console.log(totalCarPriceReduce(cars));

// Build a function that takes an array of car objects and returns a single string having the following format:
// "<car_index_1>. <model_1>: <description_1>
// <car_index_2>. <model_2>: <description_2>"

const returnProperties = cars => cars.map((car, index) => `${index}.${car.model}: ${car.description}`).join(" ");
console.log(returnProperties(cars));
