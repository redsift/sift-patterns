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
  const inData = got.in.data;
  
  // console.log("ACCOUNTS: ", inData)
  
  let bills = {}
  
  inData.forEach(m => {
	let dogName = m.key.split("/")[1]
	//console.log("MEAL: ", dogName);
	bills[dogName] = bills[dogName] ? bills[dogName] + 1 : 1;
  })
  
  for(var n in bills) {
  	console.log("Bill for ", n, bills[n])
  }
  
	  return null;
};
