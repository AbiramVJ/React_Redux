import React from 'react';
import { Card,Button } from 'react-bootstrap';

function RestaurantCard(props) {
  return (
      <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        {props.address}
        </Card.Text>
        <Button variant="primary">OrderNow</Button>
      </Card.Body>
    </Card>
    
      </div>
      );
}

export default RestaurantCard;
