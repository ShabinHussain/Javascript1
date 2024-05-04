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

  console.log('Use reduceRight to concatenate all nested arrays in reverse order.');
  reverse = data.reduceRight((item1, item2) =>item1.concat(item2));
  console.log(reverse);

  console.log('--------------------------------------------------');


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
 console.log('Sort the nested arrays based on the sum of their numbers.');
 sortedarray = data.slice().sort((a,b) => a.reduce((item1,item2) => item1+item2) - b.reduce((item1,item2) => item1+item2))
 console.log(sortedarray);

 console.log('--------------------------------------------------');


//12) Use map to get the product of the first and last number in each nested array.
console.log('Use map to get the product of the first and last number in each nested array.');
product = data.map(item => item[0] * item[2])
console.log(product);

console.log('--------------------------------------------------');


//13) Use filter to get all arrays where the sum of numbers is greater than 15.
console.log('Use filter to get all arrays where the sum of numbers is greater than 15.');
data.filter(item => item.reduce((item1,item2)=>item1+item2)>15).forEach(items=>console.log(items));

 console.log('--------------------------------------------------');



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
  console.log(' Use map to convert each number in the nested arrays to its string representation.');
  data.map(item => item.map(num => num.toString())).forEach(items=>console.log(items))

  console.log('--------------------------------------------------');



//18) Use filter to get all arrays where the length is greater than 2
console.log('Use filter to get all arrays where the length is greater than 2');
z = data.filter(item => item.length > 2)
console.log(z);




console.log('--------------------------------------------------');


//19) Use reduceRight to flatten and concatenate all nested arrays in reverse order.
console.log('Use reduceRight to flatten and concatenate all nested arrays in reverse order.');
flattenreverse = data.reduceRight((item1,item2) => item1.concat(item2))
console.log(flattenreverse);




console.log('--------------------------------------------------');


 //20) Use arrayFrom to create an array of squares of all even numbers in the nested arrays.
 console.log('Use arrayFrom to create an array of squares of all even numbers in the nested arrays.');
sq = Array.from((data.flat()).filter(item1=>item1%2==0).map(item1=>item1**2))
console.log(sq);


 console.log('--------------------------------------------------');



//21) Sort the nested arrays based on the length of each array.
console.log('Sort the nested arrays based on the length of each array.');
sortedByLength = data.slice().sort((a, b) => a.length - b.length);
console.log(sortedByLength);




console.log('--------------------------------------------------');


//22) Use map to convert each number in the nested arrays to its negative.
console.log('Use map to convert each number in the nested arrays to its negative.');
negatives = data.map(item => item.map(num => -num))
console.log(negatives);


console.log('--------------------------------------------------');


//23) Use filter to get all arrays where the last number is greater than 10.
console.log('Use filter to get all arrays where the last number is greater than 10.');
lastnum = data.filter(item => item[2]>10)
console.log(lastnum);



console.log('--------------------------------------------------');


 //24) Use reduceRight to get the difference between consecutive numbers in each nested array.

 console.log('Use reduceRight to get the difference between consecutive numbers in each nested array.');
 
differences = data.map(arr => {
  return arr.reduceRight((acc, curr, index, array) => {
    if (index !== 0) {
      acc.unshift(array[index - 1] - curr);
    }
    return acc;
  }, []);
});

console.log(differences);




 console.log('--------------------------------------------------');


//25) Use arrayFrom to create an array of square roots of all even numbers in the nested arrays.
console.log('Use arrayFrom to create an array of square roots of all even numbers in the nested arrays.');
sqrroots = Array.from(data.flat().filter(num=>num%2==0), num=>Math.sqrt(num))
console.log(sqrroots);




console.log('--------------------------------------------------');


 //26) Use includes to check if the number 15 is present in any of the nested arrays.
 console.log('Use includes to check if the number 15 is present in any of the nested arrays.');

 fifteen = data.flat().includes(15)
 console.log(fifteen?'yes':'no');

  console.log('--------------------------------------------------');



//27) Use map to convert each number in the nested arrays to its absolute value.
console.log('Use map to convert each number in the nested arrays to its absolute value.');
absltvalue = data.map(num => num.map(item => Math.abs(item)))
console.log(absltvalue);

console.log('--------------------------------------------------');


//28) Use filter to get all arrays where the first number is less than 5.
console.log('Use filter to get all arrays where the first number is less than 5.');
firstlessthan5 = data.filter(item => item[0]<5)
console.log(firstlessthan5);

console.log('--------------------------------------------------');


//29) Use reduceRight to concatenate and flatten all nested arrays in reverse order.
console.log('Use reduceRight to concatenate and flatten all nested arrays in reverse order.');
freverse = data.reduceRight((item1,item2) => item1.concat(item2))
console.log(freverse);

console.log('--------------------------------------------------');


//30) Use arrayFrom to create an array of numbers greater than 5 from the nested arrays.
console.log('Use arrayFrom to create an array of numbers greater than 5 from the nested arrays.');
greater = Array.from((data.flat()).filter(item1=>item1>5))
console.log(greater);

console.log('--------------------------------------------------');

