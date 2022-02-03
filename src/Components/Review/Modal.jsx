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

function Modal({ isOpen, setIsOpen, ...props }) {
  //const [isOpen, setIsOpen] = useState(false);

  const toggleShow = () => setIsOpen(!isOpen);
  return (
    <div>
      <MDBModal staticBackdrop tabIndex="-1" show={isOpen} setShow={setIsOpen}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Review</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form >
                <div >
                  <div>
                    <input type="radio" name="review" id="dining" />
                    <label htmlFor="dining">Dining</label>
                  </div>
                  <div >
                    <input type="radio" name="review" id="delivery" />
                    <label htmlFor="delivery">Deliver</label>
                  </div>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="amazing food"
                    
                  />
                </div>
                <div>
                  <label htmlFor="reviewText">Review Text</label>
                  <textarea
                    id="reviewText"
                    rows="5"
                    placeholder="Type your review ..."
                   
                  />
                </div>
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Submit
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}

export default Modal;
