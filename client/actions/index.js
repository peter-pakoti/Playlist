import { getPlaylist } from '../apis/playlist'

export const SET_PLAYLIST = 'SET_PLAYLIST'

export function setPlaylist(playlist) {
  return { type: SET_PLAYLIST, payload: playlist }
}

export function fetchPlaylist() {
  return (dispatch) => {
    return getPlaylist().then((playlist) => {
      dispatch(setPlaylist(playlist))
      return null
    })
  }
}
