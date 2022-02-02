import { combineReducers } from "redux";

//reducer
import restaurants from "./restaurants/restaurant.reducer";
import image from "./images/images.reducer";
import user from "./user/user.reducer";


const rootReducer = combineReducers({restaurants,image,user});
export default rootReducer;