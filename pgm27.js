//w.a.p where loop iterate up to 10 but print till 5

for(i=1;i<=10;i++){    //break used here to forcefully exit from for loop
    console.log(i);
    if(i>=5){
        break

    }
}

//w.a.p to check a given number is prime number or not
//prime number have two factors , 1 and the number itself
num=5
isPrime=true
//if(num>1){ //5>1
for(i=2;i<num;i++){ //2<5 //3<5 //4<5 //5<5
    if(num%i==0){ //5%2 //5%3 //5%4
        isPrime=false
        break
    }

}
//}
//else{
//    isPrime=false
//}
console.log(isPrime?`prime`:`not prime`)