//*
//* *
//* * *
//* * * *
//* * * * *
//* * * *
//* * *
//* *
//*

for(row=1;row<=5;row++)
{
    str=''
    for(col=1;col<=row;col++){
        str=str+"* "
    }
    console.log(str);
}
for(row=4;row>=1;row--)
{
    str=''
    for(col=1;col<=row;col++){
        str=str+"* "
    }
    console.log(str);
}










console.log(`-----------------------------------------------------------------------------------------------------`);


//    *
//   * *
//  * * *
// * * * *


for(row=1;row<=4;row++){ //1<4 //2<4
    str=" " //" "
    for(spa=4;spa>row;spa--){ //4>1 //3>1//2>1 //1>1
        str=str+" " //###
    }
    for(col=1;col<=row;col++){ //1<=1 //2<=1
        str=str+"* " //###*
    }
    console.log(str); //###*

}








console.log(`----------------------------------------------------------------------------------------------------`);






//   *
//  * *
// *   *
//*******


for(row=1;row<=4;row++){
    str=" "
    for(col=1;col<=7;col++){
        if(col+row==5 || col-row==3 ||row==4){
            str=str+"*"
        }
        else{
            str=str+" "
        }
    }
    console.log(str);
}


//* * * * *
//*       *
//*       *
//*       *
//* * * * *

for(row=1;row<=5;row++){
    str= ""
    for(col=1;col<=5;col++){
        if(row==1 || row==5 || col==1 ||col==5){
            str=str+"*"

        }
        else{
            str=str+" "
        }
    }
    console.log(str);
}






console.log(`----------------------------------------------------------------------------`);




//1
//0 1
//1 0 1
//0 1 0 1


for(row=1;row<=4;row++){
    str=" "
    for(col=1;col<=row;col++){
        if((row+col)%2==0){
          str=str+"1 "
        }
        else{
            str=str+"0 "
        }
    }
    console.log(str);

}







