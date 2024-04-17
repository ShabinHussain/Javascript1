//w.a.p to display all armstrong numbers between 8-500


for(num=8; num<=500; num++){
    //to get number of digits in a number
    power = (num+'').length
    sum=0

    temp=num
    remainder=0

    if(power!=1){
        while(temp>0){
            remainder= temp%10
            sum=sum+remainder**power
            temp=Math.floor(temp/10)
        }

    }
    else{
        sum=0
    }
    if(sum==num){
        console.log(num);
    }
}