import React from 'react'
import {
  
    MDBModalBody,
  } from "mdb-react-ui-kit";

  //redux
  import { incerateQuantity,decrementQuantity,deleteCart } from "../../redux/reducers/cart/cart.action";
  import { useDispatch, useSelector } from "react-redux";

function CheckOutPage(props) {

    const dispatch = useDispatch();
      const deleteFromCart = () => {
    dispatch(deleteCart(props._id))
  }
  const incrementFood = () =>{
    dispatch(incerateQuantity(props._id))
  }
  const decrementFood = () =>{
    if(props.quantity === 1) return;

    dispatch(decrementQuantity(props._id));
  }

  return (
    <div>
    <MDBModalBody>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
       {
           props.name
       }
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "5px",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          400LKR
        </div>
        <div>
        {

        }
          <button className="btn btn-primary" onClick={decrementFood}>-</button>
        </div>
        <div>{props.quantity}</div>
        <div
          style={{
            padding: "5px",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          {props.length}
        </div>
        <div>
          <button className="btn btn-primary" onClick={incrementFood} >+</button>
        </div>
        <div>
            <button className="btn btn-primary"onClick={deleteFromCart}>delete</button>
                 
        </div>
      </div>
    </div>
  </MDBModalBody>
    </div>
  )
}

export default CheckOutPage