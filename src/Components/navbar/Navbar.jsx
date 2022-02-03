import React, { useState } from "react";
import {
  Navbar,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
  NavbarBrand,
} from "react-bootstrap";
//redux
import { Dispatch } from "redux";
import { getUser } from "../../redux/reducers/user/user.action";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const [user, setUser] = useState({});
  console.log(user.name);

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
        <Navbar.Brand href="#">Redux testing</Navbar.Brand>
        {user.name ? (
          <Button>SIGN OUT</Button>
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
