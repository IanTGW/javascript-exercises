const fibonacci = function(length) {
    if (length < 0){
        return "OOPS";
    }
    let sum = [1,1];
    for( i = 1; i < length - 1; i++ ){
    sum.push(sum[i] + sum[i-1])
    }
    return sum[length - 1]
    };

// Do not edit below this line
module.exports = fibonacci;
