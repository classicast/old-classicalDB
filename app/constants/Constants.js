var keyMirror = require('react/lib/keyMirror');

// Define action constants
module.exports = keyMirror({
  ADD_LABEL: null,       // Adds to the DB
  ADD_LABELCODE: null,    // Adds label code to the DB
  LOAD_LABELS: null    // Loads our data
});