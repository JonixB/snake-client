// establishes a connection with the game server
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  //event handler for when there is a successful connection

  conn.on('connect', () => {
    console.log('Successfully connected to the game server')
    conn.write("Name: JNX");
  });
  //event handler for when the server sends us data
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = connect;