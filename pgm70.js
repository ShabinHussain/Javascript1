str='hello'

console.log(str[4]);


//w.a.p to check whether  a given string is palindrome or not
//'malayalam'

str='malayalam'


start=0
end=str.length-1
ispalindrome=true
while(start<end){
    if(str[start]!=str[end]){
        ispalindrome=false
    }
    start++
    end--
}
console.log(ispalindrome?'palindrome':'not palindrome');


//another - for

pal=''
for(i=str.length-1;i>=0;i--){
    pal += str[i]
}
console.log(str==pal?'palindrome':'not palindrome');