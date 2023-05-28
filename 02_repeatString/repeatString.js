const repeatString = function(string, run) {
    let returnString = '';
    if(run < 0){
        return 'ERROR';
    } else{
        for(let i = 0 ; i< run; i++){
            returnString += string;
        }
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
