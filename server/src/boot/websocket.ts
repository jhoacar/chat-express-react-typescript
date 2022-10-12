import { Server } from 'socket.io'
import app from '@boot/app'
import colors from 'colors/safe'
import { createServer } from 'http'

const server = createServer(app)

const io = new Server(server, {
    cors: {
        origin: '*',
    },
})

io.on('connection', (socket) => {
    const { address, issued } = socket.handshake

    console.log(
        colors.green(`New connection from ${address} - ${new Date(issued)}`)
    )

    socket.on('ping', (data: any) => {
        console.log(
            `User (${address} - ${new Date(issued)})  sent a ping: \n`,
            data
        )
        socket.emit('pong', { message: 'Hello from server' })
    })

    socket.on('join', (data: any) => {
        console.log(
            `User (${address} - ${new Date(issued)}) connected send: \n`,
            data
        )

        const { roomName } = data
        socket.join(roomName)
        socket.broadcast.emit('new-user', data)

        socket.on('disconnect', () => {
            socket.broadcast.emit('bye-user', data)
        })
    })
})

export default server
