class student{

    //constructor
    constructor(id,name,mark){
        this.stid=id
        this.stname=name
        this.stmark=mark
        this.studentDisplay()
    }
    //method
    studentDisplay(){
        console.log(`student details: id is ${this.stid} name:${this.stname}, mark is ${this.stmark}`);

    }
}












