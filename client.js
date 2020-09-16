const net = require("net");
const { IP, PORT, NAME } = require("./constants");
/**
 * Establishes connection with the game server
 */

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(NAME);
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
