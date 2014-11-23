var LabelSection = require('./LabelSection.react');
var React = require('react');

var App = React.createClass({

  render: function() {
    return (
      <div className="app">
        <LabelSection />
      </div>
    );
  }

});

module.exports = App;