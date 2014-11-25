'use strict';

var ServerActionCreators = require('../actions/ServerActionCreators');

module.exports = {

  getAllLabels: function() {
    var labels;
    ServerActionCreators.receiveLabels(labels);
  },

  // createLabel: function(label) {
  //   // post to server/db
  //   $.ajax({
  //     type: 'POST',
  //     url: '../../index.js',
  //     data: label,
  //     success: function() {
  //       console.log('success!');
  //       ServerActionCreators.receiveCreatedLabel(label);
  //     },
  //     error: function() {
  //       console.log('error!');
  //     }
  //   });
  // }
};
