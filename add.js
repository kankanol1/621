var add = function(){
    var total = 0,
        index = 0,
        length = arguments.length;
    for (; index < length; index++){
        if (typeof arguments[index] === "number"){
            total = total + arguments[index];
        }
    }
    return total;
};
function getFactorial(num){
    var result = 1,
        index = 1;
    for(; index <= num; index++){
        result *= index;
    }
    return result;
}
