import { combineReducers } from "redux";

//reducer
import restaurants from "./restaurants/restaurant.reducer";

const rootReducer = combineReducers({restaurants});
export default rootReducer;