const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
const multiply = (a, b) => {
    return a * b;
};
const divide = (a, b) => {
    return a / b;
};
const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    };
}


const answer = doMath(5)(2,multiply)
console.log(answer);