import request from 'superagent'

const serverUrl = '/api'

export function getPlaylist() {
  return request.get(serverUrl + '/playlist').then((result) => {
    return result.body
  })
}
