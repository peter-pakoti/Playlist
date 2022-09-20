import request from 'superagent'

const serverUrl = '/api'

export function getPlaylist() {
  return request.get(serverUrl + '/playlist').then((result) => {
    return result.body
  })
}

export function addPlaylist(playlist) {
  return request
    .post(serverUrl + '/playlist')
    .send(playlist)
    .then((res) => res.body)
    .catch((err) => console.error(err))
}
