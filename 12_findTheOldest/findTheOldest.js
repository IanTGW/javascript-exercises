const findTheOldest = function(array) {
    array.forEach((person) => {
        if (!person.yearOfDeath){
            let date = new Date;
            person.yearOfDeath = date.getFullYear();
        }
        console.log(person.yearOfDeath)
    })
    array.sort((a, b) => {
        let aAge = a.yearOfDeath - a.yearOfBirth;
        let bAge = b.yearOfDeath - b.yearOfBirth;
        if (aAge > bAge){
            return 1;
        } else {
            return -1;
        }
        
    })
    console.log(array)
    return array[array.length-1]
    
    };

// Do not edit below this line
module.exports = findTheOldest;
