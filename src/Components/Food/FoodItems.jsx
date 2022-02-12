import React,{useEffect, useState} from 'react'
import { Card,Button } from 'react-bootstrap';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { getFood } from '../../redux/reducers/food/food.action';
import { addToCart } from "../../redux/reducers/cart/cart.action";

function FoodItems(props) {
    const [food,setFood] = useState([])
    console.log(props._id);

     const dispatch = useDispatch();
     useEffect(()=>{
         dispatch(getFood(props._id)).then((data)=>{
             setFood(data.payload.foods)
         })
     },[])

const addFoodToCart = ()=>{
  dispatch(addToCart({...food, quantity:1, totalPrice:food.price}));
  setFood((prev)=>({...prev,isAddedToCart:true}));

}
const reduxState = useSelector((globalState)=>globalState.cart.cart)
console.log(reduxState);

  return (
      
    <div className='p-3'>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="" />
    <Card.Body>
        <Card.Title> {food.name}</Card.Title>        
        <Card.Title> {food.price}</Card.Title> 
        <Card.Title> {food.description}</Card.Title> 
      <Card.Text> </Card.Text>
    </Card.Body>
    <Button onClick={addFoodToCart}>ADD TO CART</Button>
    
  </Card>
  
    </div>
  )
}

export default FoodItems