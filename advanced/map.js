// Dr. Read's original solution:
/*
exports.map = function map(func,list) {
    if (list.length == 0) {
	return [];
    } else if (list.length ==1) {
	return [func(list[0])]
    } else {
	return map(func,list.slice(0,list.length-1)).concat([func(list[list.length-1])]);
    }
}
*/

// the easiest of the maps
// uses forEach
var map = function(func, list) {
  var arr = [];
  
  list.forEach(function(arg) {
    arr.push(func(arg));
  });
  
  return arr;
};


// a recursive map function
// relies on an accummulator (ran)
var recursiveMap1 = function(func, list, ran) {
  // ran defaults to 0
  ran = typeof ran !== 'undefined' ? ran : 0;
  // if the function has been run the same number of times
  // as the length of the list, return the list
  if (ran == list.length) {
    return list;
  } else {
    // modify the list
    // at the list index at the number of times the function has run,
    // call the function, with that list value as an argument
    list[ran] = func(list[ran]);
    
    // make recursive call with the modified list
    // increment ran by one
    return recursiveMap1(func, list, ran+1);
  }
};

// a recursive map function that does not use an accumulator
var recursiveMap2 = function(func, list) {
  // return an empty list is empty, return an empty list
  if (list.length == 0) {
    return [];
  } else {
    // set up a value to push later into an array
    // pass the last value of the list into func
    var valueToPush = func(list[list.length-1]);
    
    
    // make recursive call, but pass in a modified list
    // this time, the list will have the last element removed
    var rest = recursiveMap2(
      func, 
      list.slice(0, list.length-1)
    );
    
    // add to the list we just created;
    rest.push(valueToPush);
    
    // return the list we just created
    return rest;
  }
}

module.exports = {
  map: map,
  recursiveMap1: recursiveMap1,
  recursiveMap2: recursiveMap2
}
