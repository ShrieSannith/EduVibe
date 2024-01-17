import React, { useState } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import google from '../../assets/icons/google.png'
import student from '../../assets/icons/students.png';
import '../../signin.css'
import teacher from '../../assets/icons/teacher.png'
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
        <MDBCol col='10' md='6'>
          <img style={{width:"100%", height:"100%"}} src={teacher}/>
        </MDBCol>
        <MDBCol col='4' md='6'>
          {/* <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">Sign in with <a href="#"><img  src={google} style={{width:'80px', height:'30px', cursor:'pointer'}} alt="Google Logo" /></a></p>
          </div>
          <br/> <br/>
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">OR <a href="#"></a></p>
          </div> */}
          <br/><br/><br/>
          <MDBInput wrapperClass='mb-4' placeholder='username' size="lg" value={username} onChange={(e) => setUsername(e.target.value)} />
          <br/>
          <MDBInput wrapperClass='mb-4' placeholder='Password' id='formControlLg' type='password' size="lg" value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>
          <div className='text-center text-md-start mt-4 pt-2'>
            <br/>
            <button className='btn' size='sm' onClick={handleLogin} style={{ backgroundColor:"gold", color:"black"}}>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="i_signup" className="link-danger">Register</a></p>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </MDBCol>
      </MDBRow>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 ">
        <div className="text-black mb-3 mb-md-0">
          Copyright © 2023. All rights reserved.
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
