import { combineReducers } from 'redux'

import playlistReducer from './playlist'

export default combineReducers({
  playlist: playlistReducer,
})
