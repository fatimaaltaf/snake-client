const connect = require('./client');

const net = require('net');

const setupInput = function() {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();

const handleUserInput = function() {
    stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
      } 
    });

    };

    handleUserInput();
    
    return stdin;
  };

setupInput();

/**
 * Establishes connection with the game server
 */

console.log('Connecting ...');
connect();

