/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    connection.write(handleUserInput(key));
  });

  return stdin;
};

const handleUserInput = function (key) {
  if (key === "\u0003") {
    return process.exit();
  } else if (key === "w") {
    return "Move: up";
  } else if (key === "d") {
    return "Move: right";
  } else if (key === "s") {
    return "Move: down";
  } else if (key === "a") {
    return "Move: left";
  } else if (key === "1") {
    return "Say: Suck it!";
  } else if (key === "2") {
    return "Say: Booya!";
  } else if (key === "3") {
    return "Say: Who's your daddy!?";
  } else {
    return "";
  }
};

module.exports = { setupInput };
