var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _labels = {};

function _addLabels(labels) {
  labels.forEach(function(label) {
    if (!_labels[label]) {
      _labels[label] = label; 
    }
  });
};


var Store = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAll: function() {
    return _labels;
  },

});

AppDispatcher.register(function(payload) {
  var action = payload.action;
  var newestLabel;

  switch(action.type) {

    case ActionTypes.CREATE_LABEL:
      newestLabel = action.label;
      _labels[newestLabel] = newestLabel; //this probably requires a helper function to compile the entire actual
      // message from all the parts of the form
      Store.emitChange();
      break;

    case ActionTypes.RECEIVE_LABELS:
      _addLabels(action.labels);
      Store.emitChange();
      break;

    default:
      // do nothing
  }

});

module.exports = Store;