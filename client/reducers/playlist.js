import { SET_PLAYLIST } from '../actions'

const initialState = []

function playlistReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_PLAYLIST:
      return payload
  }
}

export default playlistReducer
