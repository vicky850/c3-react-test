/*global System */
'use strict';

System.config({
  transpiler: "babel",
  packages: {
    './': { defaultExtension: false },
    './actions': { main: 'index.js' },
    './constants': { main: 'index.js' },
    './helpers': { main: 'index.js' },
    './services': { main: 'index.js' },
    './custom-component': { main: 'index.js', defaultExtension: false }    
  },
  map: {
    'npm:react@16.0eta.5': 'npm:react@16.0.0'
  },
  paths: {
    "*": "https://npm.jspm.io/*.js"
  }
});
