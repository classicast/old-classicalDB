'use strict';

var React = require('react');

var ReactPropTypes = React.PropTypes;

var LabelListItem = React.createClass({

  propTypes: {
    label: ReactPropTypes.object
  },

  render: function() {
    var label = this.props.label;
    return (
      <li className="label-list-item">
        <div className="label-time">
          {label}
        </div>
      </li>
    );
  }

});

module.exports = LabelListItem;
