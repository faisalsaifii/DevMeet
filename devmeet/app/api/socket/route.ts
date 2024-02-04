import type { Server as HTTPServer } from 'http';
import type { Socket as NetSocket } from 'net';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Server as IOServer } from 'socket.io';
import { Server } from 'socket.io';

const PORT = 5000;

export const config = {
	api: {
		bodyParser: false,
	},
};

interface SocketServer extends HTTPServer {
	io?: IOServer | undefined;
}

interface SocketWithIO extends NetSocket {
	server: SocketServer;
}

interface NextApiResponseWithSocket extends NextApiResponse {
	socket: SocketWithIO;
}

export async function POST(
	req: NextApiRequest,
	res: NextApiResponseWithSocket
) {
	if (res.socket.server.io) {
		res.status(200).json({
			success: true,
			message: 'Socket is already running',
			socket: `:${PORT + 1}`,
		});
		return;
	}

	console.log('Starting Socket.IO server on port:', PORT + 1);

	const io = new Server(res.socket.server, {
		addTrailingSlash: false,
		cors: { origin: '*' },
	}).listen(PORT + 1);

	io.on('connect', (socket) => {
		const _socket = socket;
		console.log('socket connect', socket.id);
		_socket.broadcast.emit('welcome', `Welcome ${_socket.id}`);
		socket.on('disconnect', async () => {
			console.log('socket disconnect');
		});
	});

	res.socket.server.io = io;

	res.status(201).json({
		success: true,
		message: 'Socket is started',
		socket: `:${PORT + 1}`,
	});
}
