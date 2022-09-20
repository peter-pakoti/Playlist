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

router.post('/', (req, res) => {
  const playlist = req.body
  // console.log(req.body)
  // const newPlaylist = {
  //   songTitle: playlist.songTitle,
  //   artist: playlist.artist,
  //   review: playlist.review,
  // }

  db.addPlaylist(playlist)
    // .then((id) => db.getPlaylist(id))
    .then((playlist) => res.json(playlist))
    .catch((err) => {
      console.error(err)
      res.status(500).send(err.message)
    })
})

module.exports = router
