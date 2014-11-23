var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var ActionTypes = Constants.ActionTypes;

module.exports = {


  receiveCreatedLabel: function(label) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_LABEL,
      label: label
    });
  }
  receiveLabels: function(labels) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_LABELS,
      labels: labels
    });
  },

};