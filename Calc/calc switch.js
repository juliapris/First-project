"use strict";
function calc (a, b, operator) {
    let result;
    const isNotValid = ( !a || !b || (typeof a != "number") || (typeof b != "number") );
        if (isNotValid) {
    result = "Ошибка";
    } else if (!operator) {
    result = "Неизвестный оператор";
    } else if (operator === "sum") {
    result = a + b;
    } else if (operator === "sub") {
    result = a - b;
    } else if (operator === "divide") {
        if (b === 0) {
    result ="Ошибка. Делить на ноль нельзя.";
    } else {
    result = a/b;
    }
    } else if (operator === "multip"){
    result = a*b;
    }

return result;


}
console.log(calc(a: 5, b: 0, operator: "divide")); 