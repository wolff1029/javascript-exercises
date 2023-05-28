const ftoc = function(f) {
  let c = 0;
  if(typeof f === 'number'){
    c = Math.round((f -32)*(5/9) * 10) / 10;
    return c;
  } else{
    return 'error'
  }
};

const ctof = function(c) {
  let f = 0;
  if(typeof c === 'number'){
    f = Math.round(((c*(9/5) + 32)) * 10) / 10;
    return f;
  } else{
    return 'error'
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
