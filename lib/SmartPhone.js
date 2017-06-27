// ### Smart Phone

// This class inherits from the Phone class, Tablet class, Game Console class, and the Web Browser class.

// The constructor should accept a single argument `phoneNumber` and invoke the Phone class constructor passing in `phoneNumber`, and invoke the Game Console class constructor with the hard coded constructor argument `'Smart Phone'`

var Phone = require('./Phone.js');
var Tablet = require('./Tablet.js');
var GameConsole = require('./GameConsole.js');
var WebBrowser = require('./WebBrowser.js');

function SmartPhone (phoneNumber){
  Phone.call(this, phoneNumber);
  GameConsole.call(this, 'Smart Phone');
}

function expand (destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

expand(SmartPhone.prototype, Phone.prototype);
expand(SmartPhone.prototype, Tablet.prototype);
expand(SmartPhone.prototype, GameConsole.prototype);
expand(SmartPhone.prototype, WebBrowser.prototype);

module.exports = SmartPhone;