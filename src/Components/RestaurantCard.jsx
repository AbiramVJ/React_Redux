import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import { Link } from "react-router-dom";

// redux
import { useDispatch } from 'react-redux';
import { getImage } from '../redux/reducers/images/images.action';

function RestaurantCard(props) {
  const [image, setImage] = useState({
    images: [],
  });

  const dispatch = useDispatch();

  useEffect(() => {
    props.photos &&
      dispatch(getImage(props.photos)).then((data) => {
       // console.log(data.payload);
        const images = data.payload.images;
        setImage((prev) => ({ ...prev, images }));
      });
  }, [props.photos]);
  return (
    <div>
    <Link to={`/restaurants/${props._id}/overview`}>
      <div className='p-3'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image.images.length && image.images[0].location} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        {props.address}
        </Card.Text>
        <Button variant="primary">OrderNow</Button>
      </Card.Body>
    </Card>
    
      </div>
      </Link>
      </div>
      );
}

export default RestaurantCard;
