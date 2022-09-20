import { combineReducers } from 'redux'

import playlist from './playlist'
// import addPlaylistReducer from './addPlaylist'

export default combineReducers({
  playlist,
  // addPlaylistReducer: addPlaylistReducer,
})
