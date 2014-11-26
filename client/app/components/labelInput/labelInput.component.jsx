'use strict';

var ActionCreators = require('../../actions/ActionCreators');
var React          = require('react');

var ENTER_KEY_CODE = 13;

var LabelInput = React.createClass({

  getInitialState: function() {
    return {label: ''};
  },

  render: function() {
    return (
      <textarea className="label-input"
      name="label" 
      value={this.state.label} 
      onChange={this._onChange} 
      onKeyDown={this._onKeyDown} />
    );
  },

  _onChange: function(event, value) {
    this.setState({label: event.target.value});
  },

  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      var label = this.state.label.trim();
      if (label) {
        console.log(label);
        ActionCreators.createLabel(label);
      }
      else {
        console.log("no label");
      }
      this.setState({label: ''});
    }
  }

});

module.exports = LabelInput;
