//function - input (argument/arguments), code, output (return value)

let greetUser = function(){
    console.log ('Welcome User!')
}

greetUser()


let square = function(num){
    let result = num * num
    return result
}

let value = square(3)

console.log (value)

//challenge Area

let converFahrenheitToCelsius = function (temp){
    let celsius = (temp - 32) * 5/9;
    return celsius;
}

console.log(converFahrenheitToCelsius(32))
console.log(converFahrenheitToCelsius(68))
