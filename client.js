const net = require("net");
/**
 * Establishes connection with the game server
 */

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: CSA");
    // conn.write("Move: right");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.setTimeout(5000);
  conn.on("timeout", () => {
    console.log("you ded cuz you idled");
    conn.end();
  });

  return conn;
};

module.exports = { connect };
