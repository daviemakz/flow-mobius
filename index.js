// Main entry point for this module.
// Supported data types: object, array, number, string, function

'use strict';

// Import modules
const errors = require('./lib/error/error');
const methods = require('./lib/methods/methods');
const properties = require('./lib/prop/prop');

// Function: Construct object & return it with methods attatched
function constructObject (data,options) {

  // Declare local object
  var object, type, localOptions = options;

  // Determine the data type
  (typeof(data) === 'undefined') : type = 'undefined' : false;
  (typeof(data) === 'function') : type = 'function' : false;
  (typeof(data) === 'string') : type = 'string' : false;
  (typeof(data) === 'boolean') : type = 'boolean' : false;
  (typeof(data) === 'symbol') : type = 'symbol' : false;
  (typeof(data) === 'object' && Array.isArray(data)) : type = 'array' : false;
  (typeof(data) === 'object' && !Array.isArray(data)) : type = 'object' : false;

  // Return
  return object;

}

// EXPORTS
module.exports = function(data,options) {
    return constructObject(data,options);
};
