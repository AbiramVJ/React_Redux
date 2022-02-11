import React, { useState } from "react";
import { Navbar, Button } from "react-bootstrap";
import { Link,useParams } from "react-router-dom";

import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";

//redux
import NavbarCart from "../cart/navbarCart";

import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../redux/reducers/auth/auth.action";



function Nav() {

  

  
  const [isOpen, setIsOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const reduxState = useSelector((globalState) => globalState.user.user.user);
  

  const dispatch = useDispatch();

  const openModal = () => {
    setIsOpen(true);
  };
  const openSignUpModal = () => {
    setIsSignUp(true);
  };

  return (
    <div>
      <SignIn isOpen={isOpen} setIsOpen={setIsOpen} />
      <SignUp isSignUp={isSignUp} setIsSignUp={setIsSignUp} />

      <Navbar style={{ display: "flex", justifyContent: "space-between" }}>
      <NavbarCart/>
      
        <Navbar.Brand href="#">Redux testing</Navbar.Brand>
        {reduxState?.fullName ? (
          <div style={{display:"flex"}}>
          <div style={{display:"flex",padding:"10px"}}>{reduxState.fullName}</div>
          <Button className="btn" onClick={()=>dispatch(signOut)}>SignOut</Button>
          </div>
          
        ) : (
          <div style={{ display: "flex", gap: "10px", margin: "10px" }}>
            <button className="btn" onClick={openModal}>
              LOG IN
            </button>
            <button className="btn" onClick={openSignUpModal}>
              SIGN UP
            </button>
          </div>
        )}
      </Navbar>
    </div>
  );
}

export default Nav;
