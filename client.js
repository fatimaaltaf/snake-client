const net = require('net');

const connect = function() { //connecting server to client
    const conn = net.createConnection({ 
      host: '172.46.2.204',
      port: 50541   
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


//   conn.on('connect', function() { //once connection established
//     conn.write("Move: left");
//   });

//   conn.on('connect', function() { //once connection established
//     conn.write("Move: down");
//   });

//   conn.on('connect', function() { //once connection established
//     conn.write("Move: right");
//   });


    return conn;
  }

module.exports = connect;