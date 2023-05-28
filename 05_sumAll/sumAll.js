const sumAll = function(intOne, intTwo) {
    let returnVal = 0;
    let start = 0;
    let end = 0;

    if(typeof intOne === 'number' && typeof intTwo === 'number'  && intOne >=0 && intTwo >=0 ){
        if( intOne < intTwo){
            start = intOne
            end = intTwo
        } else if(intTwo < intOne){
            start = intTwo
            end = intOne
        } else{
            return 0;
        }
        for(let i = start; i<= end; i++){
            returnVal += i;
        }
    } else{
        return 'ERROR';
    }

    return returnVal;
};

// Do not edit below this line
module.exports = sumAll;
