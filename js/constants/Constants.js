
var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    ADD_LABEL: null,
    RECEIVE_LABELS: null,
    RECEIVE_CREATED_LABEL: null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};