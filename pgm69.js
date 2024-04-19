sentance='good morning all'

//w.a.p to print all vowels in the given sentance.[a,e,i,o,u]

vowels=['a','e','i','o','u','A','E','I','O','U']

character=sentance.split('')
console.log(character);

for(let char of character){
    if(vowels.includes(char)){
        console.log(char);
    }
}

console.log(`-----------------------------`);

//another method

character.filter(char=>vowels.includes(char)).forEach(element=>{console.log(element);})

//Array.from(sentance).filter(char=>vowels.includes(char)).forEach(element=>{console.log(element);})
