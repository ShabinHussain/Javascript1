//w.a.p to display numbers whose exponential is in the range of 8-36
//-here the user can input the exponential value(power)
//power=2 => 1=1 2=4 3**3=9 16 25 36 49 =3,4,5,6 //3 4 5 6
//power = 3 =>1, 8, 27, 64, 125, 216 =2,3 // 2 3

power=2
low=8
up=36
num=1
while (num<=36) { //1<=36
    if (low<=num**power && num**power<=up) { //8<=1 && 1<=36
        console.log(num);
        
    }
    num++
    
}