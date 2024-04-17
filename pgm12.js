//w.a.p to find the second largest among three number and arrange them in descending order

n1=500
n2=200
n3=300

if(n1>n2){
    if (n2>n3) {
        console.log(`second largest is ${n2}`);
        console.log(`descending order : ${n1}, ${n2}, ${n3}`);
        
    }
    else{
        console.log(`second largest is ${n3}`);
        console.log(`descending order : ${n1}, ${n3}, ${n2}`);

    }
}
     

else if (n2>n1)
    
     {
        if(n1>n3) {
            console.log(`second largest is ${n1}`);
            console.log(`descending order is ${n2}, ${n1}, ${n3}`);

            
        }
        else{
            console.log(`second largest is ${n3}`);
            console.log(`descending order is ${n2}, ${n3}, ${n1}`);


        }

    }

    
    
else if(n3>n1){
        if(n1>n2){
            console.log(`second largest is ${n1}`);
            console.log(`descending order is ${n3}, ${n1}, ${n2}`);

        }
        else{
            console.log(`second largest is ${n2}`);
            console.log(`descending order is ${n3}, ${n2}, ${n1}`);

        }
    }


else{
    console.log(`all are equal`);
}