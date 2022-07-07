"use strict";
function add(n1, n2, showResult, phrase) {
    // if {n1 !== number || n2 !== number}{
    //     throw new Error ('error'); 
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
let number1;
number1 = 1;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
