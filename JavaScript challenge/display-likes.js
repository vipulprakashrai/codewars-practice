//Write a function called displayLikes that takes in an array of names and returns a string of who likes the post.

//The function should return a string formatted as follows:

//If no one likes it, it should return 'no one likes this'
//If one person likes it, it should return '{name} likes this'
//If two people like it, it should return '{name1} and {name2} like this'
//If three people like it, it should return '{name1}, {name2} and {name3} like this'
//If more than three people like it, it should return '{name1}, {name2} and {x} others like this'

//Constraints->
//The input array will only contain strings

//solution

function displayLikes(arr){

    if(arr.length === 0){
      return `no one likes this`
    }
    else if(arr.length === 1){
      return `${arr[0]} likes this`
    }
    else if(arr.length === 2){
      return `${arr[0]} and ${arr[1]} likes this`
    }
    else if(arr.length === 3){
      return `${arr[0]}, ${arr[1]} and ${arr[2]} likes this`
    }
    else if(arr.length === 4){
      return `${arr[0]}, ${arr[1]} and ${arr.length -2} others like this`
    }
    
}

console.log(displayLikes([]));
console.log(displayLikes(['Peter']));
console.log(displayLikes(['Jacob', 'Alex']));
console.log(displayLikes(['Max', 'John', 'Mark']));
console.log(displayLikes(['Alex', 'Jacob', 'Mark', 'Max']));