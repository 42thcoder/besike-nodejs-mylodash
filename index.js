var _ = {};

_.once = function(fn){
  var invoked = false,
      result;
  
  return function(){
    result = invoked ? result : fn();
    invoked = true;
    
    return result;
  };
};


module.exports = _;