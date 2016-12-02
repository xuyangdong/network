import thunkMiddleware from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'

export const createMyStore = function(rootReducer) {
  let middlewares = []
	middlewares.push(thunkMiddleware)
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  const store = createStoreWithMiddleware(rootReducer)

  return store
}
