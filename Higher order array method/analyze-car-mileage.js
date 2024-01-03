/* You are given an array of car objects, each containing information about a car's make, model, year, and mileage. Your goal is to perform some analysis on the car mileage data using high order array methods.

Implement a function called analyzeCarMileage which takes in an array of car objects and performs the following tasks:

Calculate the average mileage of all cars.
Find the car with the highest mileage.
Find the car with the lowest mileage.
Calculate the total mileage of all cars combined.
The function should return an object containing the calculated values as properties.
*/

//Constraints
// The input array cars will contain at most 100 car objects.
// Each car object's mileage property will be a positive integer.
// Result should be rounded to 2 decimal places.


//Solution->

const cars = [
    { make: 'Toyota', model: 'Camry', year: 2020, mileage: 30800 },
    { make: 'Honda', model: 'Civic', year: 2019, mileage: 32000 },
    { make: 'Chevrolet', model: 'Impala', year: 2021, mileage: 17500 },
    { make: 'Audi', model: 'R8', year: 2020, mileage: 13000 },
    { make: 'Tesla', model: 'Model 3', year: 2018, mileage: 50000 },
  ];
  
  function analyzeCarMileage(cars){
  
    let totalMileage = cars.reduce((acc, item) => {
            return acc + item.mileage;
    },0)
    
    let averageMileage = totalMileage/cars.length;
  
    let highestMileage = cars.reduce((acc, car) => {
      return car.mileage > acc.mileage ? car : acc
    }, cars[0])
  
    let lowestMileage = cars.reduce((acc, car) => {
      return car.mileage < acc.mileage ? car : acc
    }, cars[0])
  
    return {
      averageMileage: parseFloat(averageMileage.toFixed(2)),
      highestMileage,
      lowestMileage,
      totalMileage
    }
    
  }
  console.log(analyzeCarMileage(cars));