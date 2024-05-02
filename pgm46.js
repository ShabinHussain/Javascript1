//w.a.p to print pairs whose sum is 6
b=[2,3,4,5] //(2,4)
sum=6

for(i=0;i<b.length;i++){ // 0<4 1<4 2<4
    for(j=i+1;j<b.length-1;j++){ //1<3 2<3 
        if(b[i]+b[j]==sum){ // 2+
            noPair=true
            console.log(`${b[i]},${b[j]}`);
        }
    }
}
!noPair && console.log(`no such pair`);