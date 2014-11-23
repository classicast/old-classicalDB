var App = require('./components/App.react');
var WebAPIUtils = require('./utils/WebAPIUtils');
var React = require('react');
window.React = React; // export for http://fb.me/react-devtools

WebAPIUtils.getAllLabels();

React.render(
    <App />,
    document.getElementById('react')
);