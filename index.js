function countToFifty(){
  for(let i=1; i<=50; i++){
      console.log(i);
  }
}

//2
function countFromOne(num){
  for(let i=1; i<=num; i++){
      console.log(i);
  }
}

//3
function threeAndFiveInFifty(){
  for(let i=0; i<=50; i++){
       if(i % 3 === 0 || i % 5 === 0){
          console.log(i);
      }
  } 
}

//4
function threeAndFive(num){
  for(let i=0; i<=num; i++){
       if(i % 3 === 0 || i % 5 === 0){
          console.log(i);
      }
  } 
}

//bonus
function triple(...numbers){
   let newArr = [];
   for(let i=0; i<numbers.length; i++){
       newArr.push(numbers[i] *= 3);
   }
   return(newArr);
}

countToFifty();
countFromOne(5);
threeAndFiveInFifty();
threeAndFive(10);
console.log(triple(1,2,3,4));