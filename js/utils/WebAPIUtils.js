var ServerActionCreators = require('../actions/ServerActionCreators');

// !!! Please Note !!!
// We are using localStorage as an example, but in a real-world scenario, this
// would involve XMLHttpRequest, or perhaps a newer client-server protocol.
// The function signatures below might be similar to what you would build, but
// the contents of the functions are just trying to simulate client-server
// communication and server-side processing.

module.exports = {

  getAllLabels: function() {
    // simulate retrieving data from a database
    // var rawMessages = JSON.parse(localStorage.getItem('messages'));
    var labels;
    // simulate success callback
    ServerActionCreators.receiveLabels(labels);
  },

  createLabel: function(label) {
    // post to server/db

    // success callback
    ServerActionCreators.receiveCreatedLabel(label);
  }

};