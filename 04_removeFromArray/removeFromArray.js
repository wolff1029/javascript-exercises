const removeFromArray = function(array, ...args) {
        for(let arg of args){
            console.log(arg);
            if(array.indexOf(arg) !== -1){
                array.splice(array.indexOf(arg),1);
            }
        }
        console.log(array);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
