//nested function

const global = `global`


const parent = ()=>{

   let parentvariable= `PARENT`
   console.log(`parent variable is ${parentvariable}`);
   /*cannot be accessess inside parent*/
   /*console.log(`child variable is ${childvariable}`);*/

   console.log(`child variable is ${global}`);

   const child = () => {
    let childvariable = `CHILD`
    /*can be accessed inside child*/
    console.log(`parent variable is ${parentvariable}`);
    console.log(`child variable is ${childvariable}`);
    console.log(`child variable is ${global}`);

   }


}  


parent()


