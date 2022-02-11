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

function NavbarCart() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  return (
    <div>
      <MDBBtn onClick={toggleShow}>LAUNCH DEMO MODAL</MDBBtn>
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
            <MDBModalBody>
              <div style={{display:"flex", justifyContent:"space-between"}}> 
                <div>
                McAloo Tikki™ Burger
                </div>
                <div style={{display:"flex"}}>
                <div style={{padding:"5px", alignItems:"center", fontWeight:"bold"}}>400LKR</div>
                    <div><button className="btn btn-primary">-</button></div>
                    <div style={{padding:"5px", alignItems:"center", fontWeight:"bold"}}>count 3</div>
                    <div><button className="btn btn-primary">+</button></div>
                </div>
               </div>
            </MDBModalBody>

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
