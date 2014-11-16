var FormActions = require('../actions/FormActions');

module.exports = {

  // Load mock product data from localStorage into ProductStore via Action

  // do I need this step since I don't want to save the data locally, just get from server?
  getLabelData: function() {
    var data = JSON.parse(localStorage.getItem('label'));
    FormActions.receiveLabels(data);
  }

};