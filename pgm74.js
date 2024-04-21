array = [10,20,30,40,30,20,50,30,60,70,10,40,80]
//w.a.p to find the number count from the given array. and display as an object

words = array.split(' ')
console.log(words);

obj={}
for(word of words){
    if(word in obj){
        obj[word]+=1
    }
    else{
        obj[word]=1
    }
}
console.log(obj);