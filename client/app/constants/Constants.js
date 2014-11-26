
var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    CREATE_LABEL: null,
    RECEIVE_LABELS: null,
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};
