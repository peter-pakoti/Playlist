import { getPlaylist, addPlaylist } from '../apis/playlist'

export const SET_PLAYLIST = 'SET_PLAYLIST'
export const ADD_PLAYLIST = 'ADD_PLAYLIST'

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

export function createPlaylist(playlist) {
  return { type: ADD_PLAYLIST, payload: playlist }
}

export function makePlaylist() {
  return (dispatch) => {
    return addPlaylist().then((playlist) => {
      dispatch(createPlaylist(playlist))
      return null
    })
  }
}
