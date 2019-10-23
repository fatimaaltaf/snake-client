let connection;
let timerId;

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
        else if (key === 'w') {
            moves = "Move: up";
        }
        else if (key === 'a') {
            moves = "Move: left";
        } 
        else if (key === 's') {
            moves = "Move: down";
        }
        else if (key === 'd') {
            moves = "Move: right";
        }
        else if (key === 'm') {
          moves = "Say: Here to eat";
        }
        else if (key === 'g') {
          moves = "Say: Get outta my way";
        }
        if (moves) {
          clearInterval(timerId);
          timerId = setInterval(function() {
            connection.write(moves);
          }, 100);
        }
    };

module.exports = { setupInput };

