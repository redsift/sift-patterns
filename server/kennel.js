/**
 * Patterns Sift. DAG's 'FActory' node implementation
 */
'use strict';

// Entry point for DAG node
// got ={
//   in: ... // contains the key/value pairs that match the given query
//   with: ... // key/value pairs selected based on the with selection
//   lookup: ... // an array with result of lookup for a specific key
//   query: ... // an array containing the key hierarchy
// }
// for more info have a look at:
// http://docs.redsift.com/docs/server-code-implementation
module.exports = function(got) {
	const inData = got.in;

	console.log('patterns: factory: data received:', inData.data);

	let dogs = [
		"Alf",
		"Buddy",
		"Charlie",
		"Daisy",
		"Edgar",
		"Frank",
		"George",
		"Henrietta",
		"Inky",
		"Joe",
		"Koko"
	]


	// const json = inData.data.map(d => JSON.parse(d.value));
	// json.forEach(function(value, i){
	//   console.log('datum#', i, 'value:', value)
	// })

    let dog = dogs[Math.floor((Math.random() * dogs.length))];
	let timestamp = new Date().toString();
	
	console.log("KENNEL: ", dog, "has visited");

	return {
		key: dog,
		value: {timestamp: timestamp}
	};
};
