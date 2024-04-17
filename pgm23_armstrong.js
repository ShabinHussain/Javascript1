//w.a.p to check whether the given three digit number is armstrong or not
//153=1**3 + 5**3 +3**3
//1634=1**4 +6**4+3**4+4**4

num=153
power=(num+'').length   //num+ ''(string)  ......str.length
temp=num
remainder=0
sum=0


while (num>0) { //153>0 //15>0 //1>0 //0>0
    remainder=num%10 //153%10=3 //15%10=5 //1%10=1
    sum=sum+remainder**power //0+3**3=27 //27+5**3=152 //152+1**3=153
    num=Math.floor(num/10) //153/10=15.3=15 //15/10=1.5=1 //1/10=0.1=0

    
}

if (temp==sum) {
    console.log(`armstrong`);
    
}
else{
    console.log(`not armstrong`);
}