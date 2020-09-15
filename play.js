const net = require("net");
/**
 * Establishes connection with the game server
 */

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.setTimeout(3000);
  conn.on("timeout", () => {
    console.log("you ded cuz you idled");
    conn.end();
  });

  return conn;
};

console.log("Connecting ...");
connect();
