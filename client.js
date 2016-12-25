const net = require('net');

// v----- socket connection to server
let server = net.createConnection(6969, 'localhost');
server.on('connect', () => {
	console.log('connected');

	process.stdin.pipe(server);

});