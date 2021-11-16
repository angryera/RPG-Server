// this is the websocket server, it's got "readline"
// also which just lets you type in stuff to the
// terminal and read it easily so you can send
// commands to your websocket clients
//
// interactive sessions - so 1980s 😍

const { createInterface } = require('readline');
const WebSocket = require('ws');
const { WS_Header_Init, WS_Header_StartRoom, WS_Header_CheckPlayer, WS_Header_Finished } = require('./Constants/wsheader.constants');
const { Log } = require('./Global/Utils.functions');

// create the server on port 3333
const wss = new WebSocket.Server({
	port: 3333
});

// an array to store current connected clients
const connections = []
const players = {};

// broadcasts something to every client connected
function broadcastMessage(command) {
	connections.forEach(connection => {
		try {
			connection.send(command)
		} catch (e) {
			console.error(`urrgh fuck ${e}`)
		}
	})
}

// do something when a client connects
wss.on('connection', (client) => {
	// say hello to our new connection
	client.send('Client Connected');

	// push the client to your connected clients array
	connections.push(client);

	// listen for when a client sends something to the server
	client.on('message', (message) => {
		var payload = JSON.parse(message);

		switch (payload.WSMsg_Type) {
			case WS_Header_Init:
				client.address = payload.WSMsg_Content;
				players[client.address] = client;
				Log(client.address + " : Connected");
				break;

			case WS_Header_StartRoom:
				var playerList = [];
				playerList = payload.WSMsg_Content.split(",");
				client.roomPlayers = [...playerList];
				client.tempRoomPlayers = [...playerList];
				for (var i = 0; i < playerList.length; i++) {
					players[playerList[i]].send("CheckPlayer");
				}

				Log(client.address + " : Start Room");
				Log(client.address + " : Player Lists : " + payload.WSMsg_Content);
				break;
			case WS_Header_CheckPlayer:
				var creator = payload.WSMsg_Content;

				if (players[creator].tempRoomPlayers.indexOf(client.address) >= 0) {
					players[creator].tempRoomPlayers.splice(players[creator].tempRoomPlayers.indexOf(client.address), 1);

					if (players[creator].tempRoomPlayers.length == 0) {
						players[creator].send("RoomReady");
					}

					Log(client.address + " : Check Player");
				}
				else {
					players[creator].send("InvalidPlayer");
				}
			case WS_Header_Finished:
				var creator = payload.WSMsg_Content;
				players[creator].roomPlayers.splice(players[creator].roomPlayers.indexOf(client.address), 1);
			case WS_Header_Claim:
				if (players[creator].roomPlayers.length == 1) {
					if (players[creator].roomPlayers[0].address == client.address) {
						// Finish.
					}
				}
			default:
				break;
		}
	});

	// listen for when the client disconnects
	client.on('close', () => {
		console.log('Client Disconnected : ' + client.address);

		// find the index of the closing client in the
		// connections array
		const index = connections.indexOf(client);
		players[client.address] = null;
		// if we found it, remove it - we don't want to
		// send any message to a closed client
		if (index > -1) {
			connections.splice(index, 1);
		}
	});
});
