//call back functions

function greet(name,callback){
    console.log(`hai ${name}`);
    callback()
}

function callme() {
    console.log(`I am a call back function`);
    
}

greet(`peter`,callme)


//eg: 2

setTimeout(()=>{              //both predefind and call back...took 5 sec to print the hello
    console.log(`hello`);
    
},5000)



