const { host, port} = require('./constants');
// establishes a connection with the game server
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host,
    port,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  //event handler for when there is a successful connection

  conn.on('connect', () => {
    console.log('Successfully connected to the game server')
    conn.write("Name: JNX");

    // setInterval(() => {
    //   conn.write("Move: up");
    // },50);

  });
  //event handler for when the server sends us data
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = { connect} ;