// This file isn't transpliled, so it must use CommonJS and ES5

// Register babel to tranpile before our tests run
require('@babel/register');

// Disable webpackfeaturesthat Mocha doesn't understand.
require.extensions['.css'] = function(){};
