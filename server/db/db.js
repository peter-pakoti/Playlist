const connection = require('./connection')

function getPlaylist(db = connection) {
  return db('playlist').select()
}

function addPlaylist(newPlaylist, db = connection) {
  return db('playlist').insert(newPlaylist)
}

// function addFruit(fruit, db = connection) {
//   return db('fruits').insert(fruit)
// }

module.exports = {
  getPlaylist,
  addPlaylist,
}
