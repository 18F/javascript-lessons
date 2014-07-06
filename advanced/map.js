exports.map = function map(func,list) {
    if (list.length == 0) {
	return [];
    } else if (list.length ==1) {
	return [func(list[0])]
    } else {
	return map(func,list.slice(0,list.length-1)).concat([func(list[list.length-1])]);
    }
}
