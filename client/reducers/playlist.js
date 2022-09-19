import { SET_PLAYLIST, ADD_PLAYLIST } from '../actions'

const initialState = []

function playlistReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_PLAYLIST:
      return payload

    default:
      return state
  }
}

function addPlaylistReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case ADD_PLAYLIST:
      return payload

    default:
      return state
  }
}

export default {
  playlistReducer,
  addPlaylistReducer,
}
