function isFibonacci(number) {
    let a = 0, b = 1, temp;

    while (b < number) {
        temp = a;
        a = b;
        b = temp + b;
    }

    if (b === number || number === 0) {
        return `The number ${number} belongs to the Fibonacci sequence.`;
    } else {
        return `The number ${number} does not belong to the Fibonacci sequence.`;
    }
}

let inputNumber = 21;
console.log(isFibonacci(inputNumber));
