'use strict';

var React         = require('react');
var Store         = require('../../stores/Store');
var LabelListItem = require('../labelListItem/labelListItem.component.jsx');
var LabelInput    = require('../labelInput/labelInput.component.jsx');

function getStateFromStores() {
  return {
    labels: Store.getAll(),
  };
}

function getIndividualLabel(label) {
  return (
    <LabelListItem label={label} />
  );
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
    var labelListItems = this.state.labels.map(getIndividualLabel);
    return (
      <div className="label-section">
      <h3 className="label-thread-heading">labels</h3>
      <ul className="label-list" ref="labelList">
      {labelListItems}
      </ul>
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
