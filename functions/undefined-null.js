//Undefined for variable
let name


if (name === undefined){
    console.log('Please provide a name')
} else {
    console.log(name)
}


console.log(name)


//undefined for function arguments
//When no argument is given, javascript implicitly defines num as undefined
//undefined as function return default value
let square = function(num){
    console.log(num)
}

square()

//null as assigned value and undefined used as an implicit default

let age = 27
console.log(age)
age = null
console.log(age)
