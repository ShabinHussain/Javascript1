//pattern printing

//# # # #
//# # # #
//# # # #
//# # # #

//w.a.p to print the given pattern

for(row=1;row<=4;row++){
str=''
for(col=1;col<=4;col++){
    str=str+'#'
}
console.log(str);
}


//1 1 1 1
//2 2 2 2
//3 3 3 3 
//4 4 4 4


for(row=1;row<=4;row++){
    str=' '
    for(col=1;col<=4;col++){
        str= str+row+' '
    }
    console.log(str);
}

//1 2 3 4
//1 2 3 4
//1 2 3 4 
//1 2 3 4

for(row=1;row<=4;row++){
    str=' '
    for(col=1;col<=4;col++){
        str= str+col+' '
    }
    console.log(str);
}


//*
//* *
//* * *
//* * * *
console.log('************************************************');


for(row=1;row<=4;row++){ //1<=4 //2<=4
    str='' //'' //' ' //''
    for(col=1;col<=row;col++){ //1<= //2<=1 //1<=2 //2<=2 // 1<=3 //2<=3 //3<=3 //4<=3
        str=str+'* ' //* //* *//*// * *//* * *
    }
    console.log(str); //* ** ***
}

console.log('***************************************************');





console.log('***************************************************');

//1
//2 2
//3 3 3
//4 4 4 4

for(row=1;row<=4;row++){  //1<=4 //2<=4 //3<=4
    str='' //' ' //' '
    for(col=1;col<=row;col++){ //1<=1 //2<=1 //1<=2 //2<=2 //3<=2
        str=str+row+' ' // 1// ' '+2='2'// '2'+2='22'
    }
    console.log(str); // 1 22
}



console.log('******************************************************');

//1
//1 2
//1 2 3
//1 2 3 4


for(row=1;row<=4;row++){ 
    str='' 
    for(col=1;col<=row;col++){ 
        str=str+col+' ' 
    }
    console.log(str); 
}


console.log('******************************************************');






