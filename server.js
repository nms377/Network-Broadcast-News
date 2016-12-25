const net = require('net');

let server = net.createServer((socket) => {

	//read from the client socket connection
	socket.on('data', (chunk) => {
		// messageCount ++;
		socket.write('hello\n');
		console.log(`chuck from client: ${chunk}`);

	});

	process.stdin.on('data', (cmd) => {
		socket.write(cmd);
	});

	// clientsCount++;
	// console.log(`the current client count is: ${clientsCount}`);

});

//callback function gets invoked once serve has started
server.listen(6969, '0.0.0.0' /*lets ppl bind to your port*/, () => {
	console.log('opened server on', server.address());
});