// create the redux Store 
import { createStore, applyMiddleware } from "redux";

// it is middleware for using convert Sync to async 
import thunk from "redux-thunk";

import rootReducer from "./reducers/rootReducer"

// redux middleware
const middlewares = [thunk];

//logger logger only use in development side for debug the redux code
if(process.env.NODE_ENV === "development"){
    const {logger} = require("redux-logger");
    middlewares.push(logger);
}


const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));
export default store;