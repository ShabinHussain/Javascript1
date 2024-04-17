//filter()


a=[10,12,15,13,25,2,3,5]

//w.a.p to print all even numbers from   a given array
even=a.filter(num=>num%2==0)
console.log(even);
//w.a.p to print all numbers greter than 13 from the given array
b=a.filter(num=>num>13)
console.log(b);

//w.a.p to check is there any number greter than 13 exist in the given array
c=a.some(num=>num>13)
console.log(c?'yes':'no');