import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

// redux

import { useDispatch, useSelector } from "react-redux";

import CheckOutPage from "./CheckOutPage";



function NavbarCart() {
  const [basicModal, setBasicModal] = useState(false);
  

  const toggleShow = () => setBasicModal(!basicModal);


  const reduxState = useSelector((globalState) => globalState.cart.cart);
  


  // const deleteFromCart = (id) => {
  //   dispatch(deleteCart(id))
  // }
  // const incrementFood = () =>{
  //   dispatch(incerateQuantity(reduxState._id))
  // }
  // const decrementFood = () =>{
  //   if(reduxState.quantity === 1) return;

  //   dispatch(decrementQuantity(reduxState._id));
  // }
  return (
    <div style={{ display: "flex" }}>
      <MDBBtn onClick={toggleShow}>Cart</MDBBtn>
      
      <p>${reduxState.reduce((acc, curVal) => acc + curVal.totalPrice, 0)}</p>

      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>your orders</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            {
              reduxState.map((data,index)=>(
                <CheckOutPage key={index} {...data}/>
              ))
            }
            

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>goto Checkout page</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}


export default NavbarCart;
