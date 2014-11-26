'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants     = require('../constants/Constants');

var ActionTypes = Constants.ActionTypes;

module.exports = {

  receiveLabels: function(labels) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_LABELS,
      labels: labels
    });
  },

};
