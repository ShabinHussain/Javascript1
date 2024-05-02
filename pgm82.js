baleno ={
    model: 'hatch back',
    manufacturer : 'maruti',
    varient: ['automatic','manual']
}

glanza ={
    manufacturer:'Toyoto'
}

glanza.__proto__=baleno

console.log(glanza.model);
console.log(glanza.varient);
console.log(glanza.manufacturer);