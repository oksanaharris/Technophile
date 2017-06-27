// ### Smart Watch

// This class inherits from the Watch class and the Tablet class.

// The constructor should invoke the Watch class constructor.

var Watch = require('./Watch.js');
var Tablet = require('./Tablet.js');

function SmartWatch (){
  Watch.call(this);
}

function expand (destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

expand(SmartWatch.prototype, Watch.prototype);
expand(SmartWatch.prototype, Tablet.prototype);

module.exports = SmartWatch;