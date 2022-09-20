import { ADD_PLAYLIST } from '../actions'

const initialState = []

function addPlaylistReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case ADD_PLAYLIST:
      console.log(payload)
      return [...state, payload]

    default:
      return state
  }
}

export default addPlaylistReducer
