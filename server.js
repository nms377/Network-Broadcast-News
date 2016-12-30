const net = require('net');

let server = net.createServer((socket) => {

	//read from the client socket connection
	socket.on('data', (chunk) => {
		socket.write('hello\n');
		console.log(`client: ${chunk}`);
	});

	process.stdin.on('data', (cmd) => {
		socket.write(cmd);
	});

	process.stdin.pipe(server);

});

//callback function gets invoked once serve has started
server.listen(6969, '0.0.0.0', () => {
	console.log('opened server on', server.address());
});