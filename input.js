let connection;

const setupInput = function(conn) {
    const stdin = process.stdin;
    connection = conn;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on("data", function(key) {
        handleUserInput(key);
    });
};

const handleUserInput = function(key) {
      let moves;
    
      if (key === '\u0003') {
            process.exit();
        } 
        if (key === 'w') {
            moves = "Move: up";
        }
        if (key === 'a') {
            moves = "Move: left";
        } 
        if (key === 's') {
            moves = "Move: down";
        }
        if (key === 'd') {
            moves = "Move: right";
        
        }
        connection.write(moves);
    };

module.exports = { setupInput };

