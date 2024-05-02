const data = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12] ];


//1) Find the sum of all numbers in the nested arrays.
console.log('the sum of all numbers in the nested arrays.');
sum = data.flat().reduce((num1,num2)=>num1+num2)
console.log(sum);

console.log('--------------------------------------------------');

//2) Find the maximum number in the entire nested array.
console.log('the maximum number in the entire nested array.');
max = data.flat().reduce((num1,num2)=>num1>num2?num1:num2)
console.log(max);

console.log('--------------------------------------------------');



//3) Find the average of all numbers in the nested arrays.
console.log('the average of all numbers in the nested arrays.');
avg = data.flat().reduce((num1,num2)=>num1+num2)/data.flat().length
console.log(avg);

console.log('--------------------------------------------------');


 //4) Find square of each number in the nested arrays.
 console.log('square of each number in the nested arrays.');
 square = data.flat().map(num=>num**2)
 console.log(square);

 console.log('--------------------------------------------------');


 //5) Find all even numbers from the nested arrays.
 console.log('all even numbers from the nested arrays.');
 even = data.flat().filter(num=>num%2==0)
 console.log(even);

 console.log('--------------------------------------------------');



//6) Use reduceRight to concatenate all nested arrays in reverse order.

//console.log('Use reduceRight to concatenate all nested arrays in reverse order.');
//reverse = reduceRight()

//7) create a flattened array from the nested arrays.
console.log('flattened array from the nested arrays.');
a = data.flat()
console.log(a);

console.log('--------------------------------------------------');



//8) check if the number 5 is present in any of the nested arrays
console.log('check if the number 5 is present in any of the nested arrays');
five = data.flat().includes(5)
console.log(five?'yes':'no');

console.log('--------------------------------------------------');


//9) create a single string of all numbers separated by a comma. 
console.log('create a single string of all numbers separated by a comma.');
console.log(data.toString());

console.log('--------------------------------------------------');



 //10) Print each number in the nested arrays.
 console.log('Print each number in the nested arrays.');
  data.flat().forEach(item=>{console.log(item)})

 console.log('--------------------------------------------------');


//11) Sort the nested arrays based on the sum of their numbers.
//console.log('Sort the nested arrays based on the sum of their numbers.');

//12) Use map to get the product of the first and last number in each nested array.
//console.log('Use map to get the product of the first and last number in each nested array.');
//c = data.map((item1,item2)=>item[0][0]


//13) Use filter to get all arrays where the sum of numbers is greater than 15.





//14) Use reduce to find the product of all numbers in the nested arrays.
console.log('Use reduce to find the product of all numbers in the nested arrays.');
product = data.flat().reduce((num1,num2)=>num1*num2)
console.log(product);


console.log('--------------------------------------------------');


 //15) create an array of square roots of all numbers in the nested arrays.
 console.log('create an array of square roots of all numbers in the nested arrays.');
 sqrt = data.flat().map(num=>Math.sqrt(num))
 console.log(sqrt);

 console.log('--------------------------------------------------');


//16) Use includes to check if the number 20 is present in any of the nested arrays.
console.log('Use includes to check if the number 20 is present in any of the nested arrays.');
twenty = data.flat().includes(20)
console.log(twenty?'yes':'no');

console.log('--------------------------------------------------');



//17) Use map to convert each number in the nested arrays to its string representation.
//console.log(' Use map to convert each number in the nested arrays to its string representation.');

//console.log('--------------------------------------------------');



//18) Use filter to get all arrays where the length is greater than 2

//19) Use reduceRight to flatten and concatenate all nested arrays in reverse order.

 //20) Use arrayFrom to create an array of squares of all even numbers in the nested arrays.
 console.log('Use arrayFrom to create an array of squares of all even numbers in the nested arrays.');
sq = Array.from((data.flat()).filter(item1=>item1%2==0).map(item1=>item1**2))
console.log(sq);


 console.log('--------------------------------------------------');



//21) Sort the nested arrays based on the length of each array.

//22) Use map to convert each number in the nested arrays to its negative.

//23) Use filter to get all arrays where the last number is greater than 10.

 //24) Use reduceRight to get the difference between consecutive numbers in each nested array.

//25) Use arrayFrom to create an array of square roots of all even numbers in the nested arrays.

 //26) Use includes to check if the number 15 is present in any of the nested arrays.
 console.log('Use includes to check if the number 15 is present in any of the nested arrays.');

 fifteen = data.flat().includes(15)
 console.log(fifteen?'yes':'no');

 console.log('--------------------------------------------------');



//27) Use map to convert each number in the nested arrays to its absolute value.

//28) Use filter to get all arrays where the first number is less than 5.

//29) Use reduceRight to concatenate and flatten all nested arrays in reverse order.

//30) Use arrayFrom to create an array of numbers greater than 5 from the nested arrays.
console.log('Use arrayFrom to create an array of numbers greater than 5 from the nested arrays.');
greater = Array.from((data.flat()).filter(item1=>item1>5))
console.log(greater);

console.log('--------------------------------------------------');

