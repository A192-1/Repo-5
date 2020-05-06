
//remainder
function remainder(num1, num2) {
    let result = num1 % num2
    return result
}

console.log(remainder(10,4))

//multiplication
function multi(num1, num2) {
    let result = num1 * num2
    return result
}

console.log(multi(10,4))

//square
function square(num1, num2) {
    let result = num1 ** num2
    return result
}

console.log(square(10,4))

//greater then
function greater(num1, num2) {
    if (num1 > num2){
        return num1
    } else {
        return num2
    }
    
}

console.log(greater(10,4))


function even(num1) {
    if (num1%2 === 0){
        return true
    } else {
        return false
        }
    }

    console.log(even(9))

function odd(num1){
    return(num1%2 === 0);
}

console.log(odd(10))