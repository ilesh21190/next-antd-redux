import { combineReducers } from 'redux'
import userReducers from './user.reducers'

const rootReducer = combineReducers({
  session: userReducers
})

export default rootReducer
