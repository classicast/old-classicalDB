var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants');
var _ = require('underscore');

// Define initial data points
// var _product = {}, _selected = null;

// define user label input
var _label = {}, _selected = null;

// Method to load product data from API
function loadLabelData(data) {
  _label = data[0];
}

// Extend ProductStore with EventEmitter to add eventing capabilities
var cdDataStore = _.extend({}, EventEmitter.prototype, {

  // Return Product data
  getLabel: function() {
    return _label;
  },

  // Return selected Label
  getSelected: function(){
    return _selected;
  },

  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {

    // Respond to RECEIVE_DATA action
    case FluxCartConstants.RECEIVE_DATA:
      loadProductData(action.data);
      break;

    // Respond to SELECT_PRODUCT action
    case FluxCartConstants.SELECT_PRODUCT:
      setSelected(action.data);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  ProductStore.emitChange();

  return true;

});

module.exports = ProductStore;