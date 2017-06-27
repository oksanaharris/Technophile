
// ### Nintendo DS

// This class inherits from the Game Console class and the Web Browser class.

// The constructor should invoke the Game Console class constructor with the hard coded constructor argument `'Nintendo DS'`

var GameConsole = require('./GameConsole.js');
var WebBrowser = require('./WebBrowser.js');

function NintendoDS (){
  GameConsole.call(this, 'Nintendo DS');
}

function expand (destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

expand(NintendoDS.prototype, WebBrowser.prototype);
expand(NintendoDS.prototype, GameConsole.prototype);

module.exports = NintendoDS;