// this file isn't transpiled, so must use CommonJS and ES5

// Register lable to transpile before out tests run
require('babel-register');

// Disable webpack featuress that Mocha doesn't understand
require.extensions['.css'] = function() {};
