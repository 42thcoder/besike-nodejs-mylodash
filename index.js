var _ = {};

_.once = function(fn){
  var invoked = false;
  var result;
  
  return function(){
    result = invoked ? result : fn();
    invoked = true;
    
    return result;
  };
};

_.memoize = function(fn, keyFn){
  var results = {};
  
  return function(param){
    var cacheKey = (typeof keyFn === 'function') ? keyFn(param) : (fn.name + param.toString()) ;
  
    if(! results.hasOwnProperty(cacheKey)){
      results[cacheKey] = fn(param);
    } 
    
    return results[cacheKey];
  };
};

_.bind = function (fn, context) {
  return function(){
    return fn.apply(context);
  };
};

module.exports = _;