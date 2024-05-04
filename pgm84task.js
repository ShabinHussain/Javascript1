const mixedData = [
    [1, 'apple', 3, 'banana'],
    [4, 'orange', 6, 'grape'],
    [7, 'pear', 9, 'kiwi'],
    [10, 'melon', 12, 'strawberry']
  ];
  
 // 1) Use map to create an array of strings containing both the type and value of each element.
 console.log('Use map to create an array of strings containing both the type and value of each element.');


 arrayOfStrings = mixedData.map(arr => arr.map(item => typeof item === 'string' ? `${typeof item} ${item}` : `${typeof item} ${item}`));
console.log(arrayOfStrings);
 console.log('----------------------------------------------------');

//  2) Use filter to get all arrays where the number of strings is greater than the number of numbers
console.log(' Use filter to get all arrays where the number of strings is greater than the number of numbers');



filteredData = mixedData.filter(arr => {
  let stringCount = 0;
  let numberCount = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      stringCount++;
    } else if (typeof arr[i] === 'number') {
      numberCount++;
    }
  }
  
  return stringCount > numberCount;
});

console.log(filteredData);




console.log('----------------------------------------------------');

  // 3) Use reduce to concatenate all strings in the nested arrays into a single sentence.
  console.log('Use reduce to concatenate all strings in the nested arrays into a single sentence.');
  cStrings = mixedData.reduce((item1, item2) => item1.concat(item2.filter(element => typeof element == 'string'))) //, []).join(' ');
  console.log(cStrings);

  
  console.log('----------------------------------------------------');

 // 4) Use arrayFrom to create an array of unique strings from the nested arrays.
 console.log('Use arrayFrom to create an array of unique strings from the nested arrays.');

 uniqueStrings = Array.from(mixedData.flat().filter(element => typeof element == 'string'));
 console.log(uniqueStrings);

 console.log('----------------------------------------------------');

//  5) Use sort to sort the nested arrays based on the length of strings in each array.
console.log('Use sort to sort the nested arrays based on the length of strings in each array.');
lengthstrings = mixedData.slice().sort((a,b)=>{a.filter(element => typeof element == 'string').join('').length - b.filter(element => typeof element =='string').join('').length})
console.log(lengthstrings);
  
console.log('----------------------------------------------------');

 //  6) Use map to convert each string in the nested arrays to its uppercase form.
 console.log('Use map to convert each string in the nested arrays to its uppercase form.');
 uppercase = mixedData.map(item => item.map(element => typeof element == 'string' ? element.toUpperCase() : element));
 console.log(uppercase);

  
 console.log('----------------------------------------------------');

 //  7) Use filter to get all arrays where the sum of numbers is greater than 20.
 console.log('Use filter to get all arrays where the sum of numbers is greater than 20.');
 sum = mixedData.filter(item => item.filter(element => typeof element == 'number').reduce((num1, num2) => num1 + num2) > 20);
 console.log(sum);


  
 console.log('----------------------------------------------------');

//  8) Use reduceRight to concatenate and flatten all nested arrays in reverse order.
console.log('Use reduceRight to concatenate and flatten all nested arrays in reverse order.');
freverse = mixedData.reduceRight((item1,item2) => item1.concat(item2))
console.log(freverse);


console.log('----------------------------------------------------');

  
  
//  9) Use arrayFrom to create an array of the lengths of all strings in the nested arrays.

console.log(' Use arrayFrom to create an array of the lengths of all strings in the nested arrays.');
lengths = Array.from(mixedData.flat().filter(element => typeof element =='string'), element=>element.length)
console.log(lengths);

console.log('----------------------------------------------------');

  
 //  10) Use includes to check if the word 'apple' is present in any of the nested arrays.
 console.log('Use includes to check if the word "apple" is present in any of the nested arrays.');
 includeapples = mixedData.flat().includes('apple')
 console.log(includeapples?'yes':'no');

 console.log('----------------------------------------------------');
  
   