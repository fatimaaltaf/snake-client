const net = require('net');

const connect = function() {
    const conn = net.createConnection({ 
      host: '172.46.2.204',
      port: 50541   
    });
    // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', function(data) {
    console.log("data has come to you from server: ", data);
  })
  
    return conn;
  }

module.exports = connect;