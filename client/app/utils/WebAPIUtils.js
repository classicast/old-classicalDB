var ServerActionCreators = require('../actions/ServerActionCreators');
var superagent = require('superagent');

module.exports = {

  getAllLabels: function() {
    request
    .get('api/labels')
    .end(function(error, res){
      // ServerActionCreators.receiveLabels(res);
      if(error) {
        throw error;
      }
      console.log(res);
    });
  },

  createLabel: function(label) {
    // post to server/db
   request
    .post('api/labels')
    .end(function(error, res){
      if(error) {
        throw error;
      }
      console.log("success!", res);
    });
  }

};