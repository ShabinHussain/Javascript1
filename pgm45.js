a=[10,10,20,30,40,50,60,10,20,20]
//w.a.p to find the duplicate number from the given array =10,20,30

isDuplication =false
for(i=0;i<=a.length;i++){ //0<=10
    for(j=i+1;j<=a.length;j++){ //1<=10
        if(a[i]==a[j]){
            isDuplication=true
            console.log(a[i]);
        }
    }
}
!isDuplication && console.log(`no duplication`);



