//W.A.P to print fizz when a number is divisible by 3(should give reminder 0)
                    //buzz when a number is divisible by 5
                    //fizzbuzz when a number is divisible by 15



   num=25
   
   if(num%15==0){
    console.log(`fizzbuzz`);
   }
   else if(num%5==0) {
    console.log(`buzz`);
   }
   else if(num%3==0){
    console.log(`fizz`);
   }
   else{
    console.log(`${num} is not divisible by 15,5,3`);
   }