pattern='ABCBBCAACB'

//write a program to find the first recursive letter -B
obj1={}

character=Array.from(pattern)

for(char in character){
    if(char in obj1){
        console.log(char);
        break
    }
    else{
        obj1[char]=1
    }
}