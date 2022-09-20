const connection = require('./connection')

function getPlaylist(db = connection) {
  return db('playlist').select()
}

function addPlaylist(newPlaylist, db = connection) {
  return db('playlist')
    .insert(newPlaylist)
    .then(() => getPlaylist(db))
}

module.exports = {
  getPlaylist,
  addPlaylist,
}
