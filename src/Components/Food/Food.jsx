import React,{useEffect,useState} from 'react';

import { Card,Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

// redux
import { getFood, getFoodList } from '../../redux/reducers/food/food.action';

import { useSelector,useDispatch } from 'react-redux';
import FoodItems from './FoodItems';

function Food() {
    const [foodMenu, setFoodMenu] = useState([]);
    

    const dispatch = useDispatch();
 
    //   const reduxState = useSelector(
    //     (globalState) => globalState.restaurants.selectedRestaurant.restaurant
    //   );

    const reduxState = useSelector((globalState) => globalState.restaurants.selectedRestaurant.restaurant);
    const reduxStateFood = useSelector((globalState) => console.log(globalState));
    
  
    useEffect(() => {
      reduxState &&
        dispatch(getFoodList(reduxState.menu)).then((data) => {
          setFoodMenu(data.payload.menus.menus);
          console.log(data);
          
        });
    }, [reduxState]);
   
  return (
    <div>
    <div className='p-3'>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="" />
    <Card.Body>
      {foodMenu.map((item,index)=>(
        <Card.Title key={index}>{item.name}</Card.Title>        
  ))}
      <Card.Text>
      {
          foodMenu.map((data,index)=>(
            data.items.map((data,index)=>(
                <FoodItems key={index} _id={data}/>
            ))
          ))
      }
      </Card.Text>
    </Card.Body>
  </Card>
  
    </div>
    </div>
  )
}

export default Food