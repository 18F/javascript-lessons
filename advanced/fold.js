exports.foldl = function foldl(func,list,seed) {
    if (list.length == 0) {
	return seed;
    } else {
	return func(list[0],foldl(func,list.slice(1,list.length),seed));
    }
}

exports.foldr = function foldl(func,list,seed) {
    if (list.length == 0) {
	return seed;
    } else {
	return func(foldl(func,list.slice(1,list.length),seed),list[0]);
    }
}

// console.log(exports.foldl(function plus(a,b) { return a+b; },[3,4,5],0));
// console.log(exports.foldr(function plus(a,b) { return a+b; },[3,4,5],0));
