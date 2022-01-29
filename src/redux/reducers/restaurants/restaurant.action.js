import axios from "axios";

//REDUX TYPE
import { GET_RESTAURANTS, GET_SPECIFIC_RESTAURANT } from "./restaurant.type";

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

export const getSpecificRestaurant = (_id) =>async (dispatch)=>{
try{
    const restaurant = await axios({
        method:"GET",
        url:`http://localhost:4000/restaurant/${_id}`,

    });
    return dispatch({type:GET_SPECIFIC_RESTAURANT,payload:restaurant.data});

}catch(error){
    return dispatch({ type: "ERROR", payload: error });
}
}