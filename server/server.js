const express = require('express')
const path = require('path')
const playlistRoutes = require('./routes/playlist')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use('/api/playlist', playlistRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
