const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors');
const { Socket } = require('socket.io');

const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

app.use(cors());

const port = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send('Sever is running')
    
});

// Socket.io to transfer data at realtime 
io.on('connection', (socket)=>{
    socket.emit('creator', socket.id);

    socket.on('disconnect', ()=>{
        socket.broadcast.emit("callended");
    });

    socket.on('calluser', ({userToCall, signalData, from, name})=>{
        io.to(userToCall).emit('calluser', {signal: signalData, from, name});
    });

    socket.on('answercall', (data)=>{
        io.to(data.to).emit('callaccepted', data.signal);
    })
})

server.listen(port, ()=>{
    console.log(`Sever started at Port ${port}`);
})


