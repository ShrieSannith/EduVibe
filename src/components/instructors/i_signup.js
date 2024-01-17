import React, { useState } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import google from '../../assets/icons/google.png'
import student from '../../assets/icons/students.png';
import '../../signin.css'
function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Backend code was here, but it has been removed.
      // You can add your backend integration logic here.

      // Simulating a successful login for demonstration purposes.
      localStorage.setItem('isLoggedIn', true);
      setSuccessMessage('Login successful');
      setError('');
      window.location = '/';

    } catch (error) {
      setError('Invalid credentials');
      setSuccessMessage('');
      console.error('Error logging in:', error);
    }
  };

  return (
  
    <MDBContainer fluid className="p-3 my-12 ">
      <br/><br/><br/>
      <MDBRow>
        <MDBCol col='4' md='6'>
           <br/><br/>
          <MDBInput wrapperClass='mb-4' placeholder='Username' size="lg"  />
                  <br />
         <MDBInput wrapperClass='mb-4' type='email' placeholder='Email' size="lg" />
          <br/>
                  <MDBInput wrapperClass='mb-4' placeholder='Password' id='formControlLg' type='password' size="lg" />
                            <div className='text-center text-md-start mt-4 pt-2'>
            <br/>
            <button className='btn' size='sm' onClick={handleLogin} style={{ backgroundColor:"gold", color:"black"}}>SignUp</button>
            <p className="small fw-bold mt-2 pt-1 mb-2">Already a member? <a href="i_signin" className="link-danger">Login</a></p>
          </div>
              </MDBCol>
              
        <MDBCol col='4' md='6'>
          
          <br/><br/>
          <MDBInput wrapperClass='mb-4' placeholder='Years of experience' size="lg"  type='number' />
                  <br />
         <MDBInput wrapperClass='mb-4' type='text' placeholder='Area of expertise' size="lg" />
          <br/>
          <MDBInput label = 'Please upload your resume' wrapperClass='mb-4' placeholder='Upload resume' id='formControlLg' type='file' size="lg" />

          {error && <p style={{ color: 'red' }}>{error}</p>}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </MDBCol>
      </MDBRow>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 ">
        <div className="text-black mb-3 mb-md-0">
 
        </div>
        <div>
          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='facebook-f' size="md"/>
          </MDBBtn>
          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='twitter' size="md"/>
          </MDBBtn>
          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='google' size="md"/>
          </MDBBtn>
          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='linkedin-in' size="md"/>
          </MDBBtn>
        </div>
      </div>
    </MDBContainer>
  );
}

export default App;
