class Landing{
    //property

    database={
        Milan:{username:'Milan',password:'milan123'},
        Manu:{username:'Manu',password:'manu123'},
        Mini:{username:'Mini',password:'mini123'}

    }


//to store data to local storage

saveData(){
    if(this.database){
        localStorage.setItem("database",JSON.stringify(this.database))
    }

}

//to get data from local storage
getData(){
    this.database = JSON.parse( localStorage.getItem("database"))


    /*console.log(this.database);*/
     
}

//method to register user
register(){
    this.getData()
    let user = regUser.value
    let pswd = regpswd.value
    /*console.log(user,pswd);*/
    if(user=="" || pswd==""){
        alert('please fill the form completely')
    }
    else{
        if(user in this.database){
            alert("Account already exists")
        }
        else{
            this.database[user] = {username:user, password:pswd}
            alert("User added successfully")
            this.saveData()
            //navigate to login page
            window.location = "login.html"
        }
    }

}

//method to login a user\
login(){
    let user1 = logUser.value
    let pswd1 = logPswd.value
    console.log(user1,pswd1);
}



}

//create object

const obj = new Landing()
obj.saveData()
obj.getData()