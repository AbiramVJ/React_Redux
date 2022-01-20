import { combineReducers } from "redux";

//reducer
import restaurants from "../reducers/restaurants/restaurant.reducer";

const rootReducer = combineReducers({restaurants});
export default rootReducer;