// creating a Set-->
const nameSet = new Set();
const set1 = new Set(['John', 'Jane', 'Joe']);
console.log(set1); // Set { 'John', 'Jane', 'Joe' }
const set2 = new Set(['John', 'Jane', 'Joe', 'Jane', 'Joe']);
console.log(set2); // Set { 'John', 'Jane', 'Joe' }

//Adding Data-->
nameSet.add('Jack');
nameSet.add('Jill');
console.log(nameSet); // Set {'Jack', 'Jill'}

//Check for a Value-->
console.log(nameSet.has('Jack')); // true

//Getting the Size of a Set-->
console.log(nameSet.size); // 2

//Looping Through a Set-->
for (const value of nameSet) {
  console.log(value);
}
//converting a set to an array-->
const nameArray = Array.from(nameSet);
console.log(nameArray); // ['Jack', 'Jill']

//Converting an Array to a Set-->
const set3 = new Set(nameArray);
console.log(set3); // {'Jack', 'Jill'}

//Deleting All Data from a Set-->
nameSet.clear();
