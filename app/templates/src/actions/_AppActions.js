'use strict';
var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  exampleAction: function(text){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.EXAMPLE_CONSTANT,
      text: text + ' to Actions'
    });
  }
};

module.exports = AppActions;