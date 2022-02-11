import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";


// redux action
import { signIn } from "../../redux/reducers/auth/auth.action";
import { useDispatch } from "react-redux";

function SignIn({ isOpen, setIsOpen}) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChanged = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const submit = () => {
    
    dispatch(signIn(userData));
    setUserData({ email: "", password: "" });
    console.log(userData);
   
  };
  const toggleShow = () => setIsOpen(!isOpen);
  return (
    <div>
      <MDBModal tabIndex="-1" show={isOpen} setShow={setIsOpen}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Sign In</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form>
                <MDBInput
                  className="mb-4"
                  type="text"
                  id="email"
                  label="email"
                  value={userData.email}
                   onChange={handleChanged}
                />
                <MDBInput
                  className="mb-4"
                  type="password"
                  id="password"
                  label="Password"
                  value={userData.password}
                  onChange={handleChanged}
                />
                <MDBRow className="mb-4"></MDBRow>
                <MDBBtn onClick={submit}>
                  Sign in
                </MDBBtn>
              </form>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}

export default SignIn;
