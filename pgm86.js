class A{
    methoda(){
        console.log('inside the first method');
    }
}

class B extends A{
    methoda(){
        console.log('inside the second method');
    }

    methoda(){
        console.log('inside the third method');
    }



}

//object

const obj = new B()
obj.methoda()