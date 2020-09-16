const { connect } = require("./client");

console.log("Connecting ...");
connect();

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key);
  });

  return stdin;
};

const handleUserInput = function (key) {
  if (key === "\u0003") {
    return process.exit();
  } else if (key === "ArrowUp" || key === "w") {
    return process.stdout.write("Move: up");
  } else if (key === "ArrowRight" || key === "d") {
    return process.stdout.write("Move: right");
  } else if (key === "ArrowDown" || key === "s") {
    return process.stdout.write("Move: down");
  } else if (key === "ArrowLeft" || key === "a") {
    return process.stdout.write("Move: left");
  }
};

console.log(setupInput());
