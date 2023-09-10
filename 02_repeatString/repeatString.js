const repeatString = function(string, num) {

    if (num < 0) return "ERROR";

    let loopedString = '';

    for (let i = 0; i < num; i++) {

    loopedString += string;
    
    };
    
    return loopedString;

};

// Do not edit below this line
module.exports = repeatString;
