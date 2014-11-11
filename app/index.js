'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

var ReactFluxGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the perfect reactflux generator!'
    ));

    var prompts = [{
      type: 'string',
      name: 'appName',
      message: 'What would you like to name your application? ',
      default: 'reactflux'
    },{
      type: 'string',
      name: 'packageName',
      message: 'Enter a one-word package name (for package.json): ',
      default: 'package'
    },{
      type: 'string',
      name: 'appDesc',
      message: 'Describe your application in one sentence: ',
      default: '...'
    }];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;
      this.packageName = props.packageName;
      this.appDesc = props.appDesc;
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.dest.mkdir('build');
      this.dest.mkdir('src');
      this.dest.mkdir('src/actions');
      this.dest.mkdir('src/components');
      this.dest.mkdir('src/constants');
      this.dest.mkdir('src/dispatchers');
      this.dest.mkdir('src/stores');
    },

    projectfiles: function () {
      this.template('_package.json', 'package.json');
      this.template('_README.md', 'README.md');
      this.template('_bower.json', 'bower.json');
      this.src.copy('_gitignore', '.gitignore');
      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('jshintrc', '.jshintrc');
      this.src.copy('_gulpfile.js', 'gulpfile.js');
      this.src.copy('_index.html', 'index.html');
      this.src.copy('src/_app.jsx', 'src/app.jsx');
      this.src.copy('src/actions/_AppActions.js', 'src/actions/AppActions.js');
      this.src.copy('src/components/_App.jsx', 'src/components/App.jsx');
      this.src.copy('src/constants/_AppConstants.js', 'src/constants/AppConstants.js');
      this.src.copy('src/dispatchers/_AppDispatcher.js', 'src/dispatchers/AppDispatcher.js');
      this.src.copy('src/stores/_AppStore.js', 'src/stores/AppStore.js');
    }
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = ReactFluxGenerator;
