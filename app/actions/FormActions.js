var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

// Define actions object
var FormActions = {

  addLabel: function(labelName) {
    AppDispatcher.handleAction({
      actionType: Constants.ADD_LABEL,
      labelName: labelName
    })
  },
  addLabelCode: function(labelCode) {
    AppDispatcher.handleAction({
      actionType: Constants.ADD_LABELCODE,
      labelCode: labelCode
    })
  },
};

module.exports = FormActions;