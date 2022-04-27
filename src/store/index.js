import rootReducer from "../reducers"
import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store