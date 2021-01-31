const { Socket } = require("dgram");
const express = require ("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const port = 3000;

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on("chat message", msg => {
        console.log(msg);
        io.emit("chatMessage", "( ID:"+socket.id+") "+msg);
    });
});

server.listen(port, () => {
    console.log('Listenieng on port: ' + port);
});