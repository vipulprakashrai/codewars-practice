
function countDown(num){
    //base case
    if(num == 0){
       console.log("counting is completed");
      return;
    }
    //recursive case
    console.log(num);
    num--;
    countDown(num);
  }
  countDown(10);