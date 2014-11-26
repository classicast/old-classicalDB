'use strict';

var React        = require('react');
var LabelSection = require('../labelSection/labelSection.component.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        Hello!
        <LabelSection />
      </div>
    );
  }
});

module.exports = App;