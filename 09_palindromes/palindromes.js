const palindromes = function (string) {
    string = string.toLowerCase()
    string = string.split('');
    for(j = 0; j < string.length; j++) {
       if( !(string[j].charCodeAt() >= 48 && string[j].charCodeAt() <=57) &&
        !(string[j].charCodeAt() >= 97 && string[j].charCodeAt() <=122)){
           string.splice(j, 1)
           j--
            } 
       }
        let i = 0
        string.forEach(function(value, index) {
        if (string[string.length - 1 - index] === value){
            i++
        }
    })

    if (i === string.length){
            return true;
        } else {
            return false;
        }
    
}

// Do not edit below this line
module.exports = palindromes;
