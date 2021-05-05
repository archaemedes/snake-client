const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: '50542',
  });

  conn.on('connect', ()=>{
    console.log("You connected!");
  })

  conn.on('data', (data)=>{
    console.log(data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();