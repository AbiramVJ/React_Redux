import logo from './logo.svg';
import React from 'react';

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useEffect } from 'react';

//components
import OverView from './Components/OverView/overView';
import Restaurants from './Components/restaturants';
import Nav from "./Components/navbar/Navbar";

//redux
import { useDispatch} from 'react-redux';
import { getMySelf } from './redux/reducers/user/user.action';
import Food from './Components/Food/Food';
import { getRestaurant } from './redux/reducers/restaurants/restaurant.action';

function App() {


  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getMySelf());
    dispatch(getRestaurant());
  });
 
  


  return (
    <div> 
    <Nav/>
   
      <Routes>
        <Route path="/restaurants" element={<Restaurants/>}/>
        <Route path="/restaurants/:_id/overview" exact element={<OverView/>}/>
        <Route path='/:_id/food' element={<Food/>}/>
      </Routes>
    
   
    </div>
  );
}

export default App;
