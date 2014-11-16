var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

// Define actions object
var FormActions = {

  // Receive initial label data
  receiveLabels: function(data) {
    AppDispatcher.handleAction({
      actionType: Constants.RECEIVE_DATA,
      data: data
    })
  },
  addLabel: function(labelName) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.LABEL_ADD,
      labelName: labelName
    })
  },
  addLabelCode: function(labelCode) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.LABEL_ADD,
      labelCode: labelCode
    })
  },
};

module.exports = FormActions;