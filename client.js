const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() { //connecting server to client
    const conn = net.createConnection({ 
      host: IP,
      port: PORT   
    });
    // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', function(data) { //connection established
    console.log("data has come to you from server: ", data); //receiving data from server
  });

  conn.on('connect', function() { //once connection established
    console.log("Successfully connected to game server"); //confirmation message print to us
    conn.write("Name: UGH"); //sending data to server
  });
  
    return conn;
}

module.exports = { connect };