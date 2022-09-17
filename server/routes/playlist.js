const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.get('/', (req, res) => {
  db.getPlaylist()
    .then((playlist) => {
      res.json(playlist)
    })
    .catch((err) => console.error(err))
})

module.exports = router
