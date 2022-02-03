import React, { useState } from 'react';
import { MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  
  MDBInput,
  MDBRow,
  
} from 'mdb-react-ui-kit';

function SignIn({isOpen,setIsOpen,...props}) {
    //const [isOpen, setIsOpen] = useState(false);
    const toggleShow = () => setIsOpen(!isOpen);
  return (
      <div>
      <MDBModal tabIndex='-1' show={isOpen} setShow={setIsOpen}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Sign In</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
                <form>
                    <MDBInput className='mb-4' type='email' id='form1Example1' label='Email address' />
                    <MDBInput className='mb-4' type='password' id='form1Example2' label='Password' />          
                    <MDBRow className='mb-4'>                  
                    </MDBRow>           
                    <MDBBtn type='submit' block>
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
