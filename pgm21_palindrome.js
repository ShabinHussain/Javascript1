//w.a.p to check whether a given number is palindrome or not eg:121
//same reverse method used in pgm20


num=121
reverse=0
remainder=0
temp=num
while (num>0) {
    remainder=num%10
    reverse=(reverse*10)+remainder
    num=Math.floor(num/10)
    
}

if (temp==reverse) {
    console.log(`it is a palindrome number`);
    
}
else{
    console.log(`not a palindrome`);
}