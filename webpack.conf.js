var path = require('path');
var webpack = require('webpack');

module.exports = {
  // webpack options
  entry: 'app/main.js',
  output: {
    path: 'dist/js',
    filename: 'bundle.js',
  },

  node: {
    fs: 'empty'
  },

  resolve: {
    alias: {
      app: path.join(__dirname, 'src/js'),
    },

    modulesDirectories: ['web_modules', 'node_modules']
  },

  stats: {
    // Configure the console output
    colors: false,
    modules: true,
    reasons: true
  },
  // stats: false disables the stats output

  storeStatsTo: 'xyz', // writes the status to a variable named xyz
  // you may use it later in grunt i.e. <%= xyz.hash %>

  progress: false, // Don't show progress
  // Defaults to true

  failOnError: false, // don't report error to grunt if webpack find errors
  // Use this if webpack errors are tolerable and grunt should continue

  //watch: true, // use webpacks watcher
  // You need to keep the grunt process alive

  //keepalive: true // don't finish the grunt task
  // Use this in combination with the watch option
};