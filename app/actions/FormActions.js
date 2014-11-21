var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

// Define actions object
var FormActions = {

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