'use strict';

var React         = require('react');
var Store         = require('../../stores/Store');
var LabelInput    = require('../labelInput/labelInput.component.jsx');

function getStateFromStores() {
  return {
    labels: Store.getAll(),
  };
}

var LabelSection = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    Store.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    Store.removeChangeListener(this._onChange);
  },

  render: function() {
    var labelListItems = getStateFromStores();
     return (
        <div className="label-time">
          {labelListItems[0]}
          <LabelInput />
        </div>
    );
  },

  /**
  * Event handler for 'change' events coming from the Store
  */
  _onChange: function() {
    this.setState(getStateFromStores());
  }

});

module.exports = LabelSection;
