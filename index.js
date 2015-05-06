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

_.memoize = function(fn, keyFn){
  var results = {};
  
  return function(param){
    var cacheKey;
      if(typeof keyFn === 'undefined') {
        cacheKey = fn.name + param.toString();
      } else {
        cacheKey = keyFn(param);
      }
    
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

