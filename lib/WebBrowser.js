// ### Web Browser

// The class should have an `open` method that accepts a single argument `url` and return a status message.  
// status message should be in the format: 'Browsing to `url`'  
// example: `Browsing to http://reddit.com/r/aww`

function WebBrowser (){
}

WebBrowser.prototype.open = function (url){
  var message = 'Browsing to ' + url;
  console.log(message);
  return message;
};

module.exports = WebBrowser;