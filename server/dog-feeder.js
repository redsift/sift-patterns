/**
 * Patterns Sift. DAG's 'Processor' node implementation
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
module.exports = function (got) {
  console.log("GOT: ", got);
  const inData = got.in;
  const larder = parseInt(got.lookup[0].data.value.toString());
  console.log("LARDER ", larder);
  const fed = got.with.data[0];
  console.log("FED ", fed)
  let data = inData.data[0];
  

  console.log("KEY: ",  data.key, "VALUE: ", JSON.parse(data.value.toString()));
  
  let dogName = data.key;

  //Has the dog been fed? Send him away.
  if(fed) {
	console.log("FEEDER ", data.key, " has been feed")
	return null;
  } else {
  	console.log("FEEDER ", data.key, " has not been feed")
	// Feed the dog and subtract the can from the larder.
	  
	let timestamp = Date.now().toString();
	return [
		{
			name: "fed",
			key:  dogName,
			value: "true"
		},
		{
			name: "meals",
			key: timestamp + "/" + dogName,
			value: "Kennomeat"
		},
		{
			name: "larder",
			key: "dogFood",
			value: larder-1
		}
	]
  }
  
  
  // const json = data.map(d => JSON.parse(d.value));
  // json.forEach(fun11ction(value, i){
  //   console.log('ITEM', i, 'value:', value)
  // })

	  return null;
};
