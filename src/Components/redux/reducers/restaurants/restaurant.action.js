import axios from "axios";

//REDUX TYPE
import { GET_RESTAURANTS } from "./restaurant.type";

export const getRestaurant = () => async(dispatch)=>{
    try{
        const restaurantList = await axios({
            method:"GET",
            url: "http://localhost:4000/restaurant/?city=NCR"
        })
        return dispatch({type:GET_RESTAURANTS, payload:restaurantList.data})
    }catch(error){
        return dispatch({ type: "ERROR", payload: error });
    }
}