import React from 'react';
import { Navbar,Container,NavDropdown,Form,FormControl,Button, NavbarBrand} from 'react-bootstrap';
//redux
import { Dispatch } from 'redux';
import { getUser } from '../../redux/reducers/user/user.action';


function Nav() {

  return (
      <div>
      <Navbar>
      <Navbar.Brand href="#">Redux testing</Navbar.Brand>
      </Navbar>
      </div>
      )
}

export default Nav;
