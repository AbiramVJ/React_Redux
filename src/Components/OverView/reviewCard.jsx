import React from 'react';
import { useState,useEffect } from 'react';

//redux action
import { getUser } from '../../redux/reducers/user/user.action';
import { useDispatch } from 'react-redux';



function ReviewCard(props) {

  const [user,setUser]=useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (props) {
      dispatch(getUser(props.user)).then((data) => {
        setUser(data.payload.user.fullName);
        
      });
    }
  }, []);

  return (
      <div className='border border-dark'>
        <p> fullName :{user}</p>
        <p className="w-full text-gray-600 font-light text-base"> create At :{props.createdAt}</p>
        <p className="w-full text-gray-600 font-light text-base">review Text :{props.reviewText}</p>   
      </div>
      );
}

export default ReviewCard;
