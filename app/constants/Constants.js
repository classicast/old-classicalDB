var keyMirror = require('react/lib/keyMirror');

// Define action constants
module.exports = keyMirror({
  LABEL_ADD: null,       // Adds to the DB
  LABELCODE_ADD: null,    // Adds label code to the DB
  RECEIVE_DATA: null    // Loads our data
});