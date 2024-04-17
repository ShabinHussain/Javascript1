//w.a.p to display all prime nos from 2 to 50


for(i=2;i<=50;i++){ //2<=50 //3<=50
    let flag=0  //flag=0 //flag=0
    for(j=2;j<i;j++){ //2<2 //2<3
        if(i%j==0){ //3%2
            flag=1
            break
        }
    }
    if(i>0 && flag==0){
        console.log(i);
    }
}