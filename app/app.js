window.React = require('react');
var DataAPI = require('./utils/DataAPI')
var ClassicalApp = require('./components/ClassicalApp.react');

// Load API Call
DataAPI.getLabelData();

// Render ClassicalApp Controller View
React.render(
  <ClassicalApp />,
  document.getElementById('flux-classical')
);