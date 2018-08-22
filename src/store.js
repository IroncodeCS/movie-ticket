import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers/movie'

const middleware = [thunk]
middleware.push(logger)
const initStore = (initialState = { }) => {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
}
export default initStore
// export default initStore = createStore(rootReducer)
