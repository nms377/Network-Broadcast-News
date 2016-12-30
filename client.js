const net = require('net');

// v----- socket connection to server
let server = net.createConnection(6969, 'localhost');
server.on('connect', (chunk) => {
	console.log('connected to ', server.address());

	process.stdin.pipe(server);

});

server.on('data', (chunk) =>{
	console.log(`SERVER: ${chunk}`);
});