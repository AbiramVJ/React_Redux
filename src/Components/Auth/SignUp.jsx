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
  
} from "mdb-react-ui-kit";
//redux action
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/reducers/auth/auth.action";

function SignUp({ isSignUp, setIsSignUp, ...props }) {

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  const dispatch = useDispatch();

  const handleChanged = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const submit = () => {
    dispatch(signUp(userData));
    setUserData({ email: "", password: "", fullName: "" });
  };

  const toggleShow = () => setIsSignUp(!isSignUp);
  return (
    <div>
      <MDBModal tabIndex="-1" show={isSignUp} setShow={setIsSignUp}>
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
                  id="fullName"
                  label="FullName"
                  value={userData.fullName}
                  onChange={handleChanged}
                />
                <MDBInput
                  className="mb-4"
                  type="text"
                  id="email"
                  label="Email address"
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
                
                <MDBBtn type="submit" block onClick={submit}>
                  submit
                </MDBBtn>
              </form>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}

export default SignUp;
