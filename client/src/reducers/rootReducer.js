import { combineReducers } from 'redux'
import bookReducer from './bookReducer'
import myBookReducer from './myBookReducer'

export default combineReducers({
  books: bookReducer,
  myBooks: myBookReducer
})
