function calc (a,b,operator){
    let result;
    if (a === "") || b === ""){
    result = "Error";
} else if (isNaN(a)) || isNaN(b)){
    result = "Error";
} else if (operator === "sum"){
    result = a+b;
} else if (operator === "sub"){
    result = a-b;
} else if (operator === "divide"){
    if b === 0{
        result ="Error. Division by zero is forbidden";
    }else{
    result = a/b;}
      
} else if (operator === "multip"){
    result = a*b;
}

return result;


}
console.log (calc(a=5, b=0, operator="divide")); 