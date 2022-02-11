import { GET_FOOD_LIST} from "./food.type";

const initialState = {
    foodList:[],
}

 const foodReducer = (state = initialState, action) =>{
    switch(action){
        case GET_FOOD_LIST:
            return{
                ...state,
                foodList:action.payload,
            }
        default:
            return{
                ...state
            }
    }


}
export default foodReducer;