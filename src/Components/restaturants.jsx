import React from 'react';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

//redux action
import { getRestaurant } from '../redux/reducers/restaurants/restaurant.action';
import RestaurantList from './restaurantList';



function Restaurants() {
    const dispatch = useDispatch();
    useEffect(()=>{
    dispatch(getRestaurant());

    },[])
  return (
    <div className="py-3 px-md-5 d-flex">
        <RestaurantList/>
    </div>
    );
}

export default Restaurants;
