import React from 'react';

import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';

import RestaurantCard from './RestaurantCard';


function RestaurantList() {
const [restaurantList, setRestaurantList] = useState([]);
// const redState = useSelector((store)=>{
//     console.log(store);
// })
 const reduxState = useSelector((store)=> store.restaurants.restaurants);
 

 useEffect(()=>{
     reduxState.restaurants && setRestaurantList(reduxState.restaurants);
 },[reduxState.restaurants]);
    
  return (
      <div className="py-3 px-md-5 d-flex">
      {restaurantList.map((data, index)=>(
          <RestaurantCard {...data} key={index}/>
      ))}
     
      </div>
      
      );
}

export default RestaurantList;
