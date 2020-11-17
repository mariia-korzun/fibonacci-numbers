const fibonacciNumbers = (num) => {
    let number1 = 1
    let number2 = 1
    if (typeof num !== 'number') {
        return 'Passed argument is not a number'
    }
    if(num <= 2) { return 1 }
    return fib(number1, number2, num - 2)
};

function fib(number1, number2, num) {
    num--
    let newNumber1 = number2
    number2 = number1 + number2
    if (num==0) {
        return number2
    }
    return fib(newNumber1, number2, num)
}

module.exports = fibonacciNumbers;
