import { combineReducers } from "redux";

//reducer
import restaurants from "./restaurants/restaurant.reducer";
import image from "./images/images.reducer";
import user from "./user/user.reducer";
import auth from "./auth/auth.reducer";
import food from "./food/food.reducer";


const rootReducer = combineReducers({restaurants,image,user,auth,food});
export default rootReducer;