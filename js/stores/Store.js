var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _labels = {};


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

Store.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;
  var newestLabel;

  switch(action.type) {

    case ActionTypes.ADD_LABEL:
      newestLabel = action.label;
      _labels[newestLabel] = newestLabel;
      Store.emitChange();
      break;

    default:
      // do nothing
  }

});

module.exports = Store;