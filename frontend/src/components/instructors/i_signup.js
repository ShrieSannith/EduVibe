import React, { useState } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import google from '../../assets/icons/google.png';
import student from '../../assets/icons/students.png';
import teacher from '../../assets/icons/teacher.png';
import '../../signin.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [role] = useState('Instructor'); // Default role is Instructor

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setSuccessMessage('');
      return;
    }

    const formData = {
      name,
      email,
      password,
      role, // Include the role in the form data
    };

    console.log(JSON.stringify(formData));

    try {
      const response = await fetch('http://localhost:5000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('isLoggedIn', true);
        setSuccessMessage('Registration successful');
        setError('');
        // Optionally redirect to another page
        // window.location = '/i_signin';
      } else {
        setError(data.message || 'Registration failed');
        setSuccessMessage('');
      }
    } catch (error) {
      setError('An error occurred');
      setSuccessMessage('');
      console.error('Error registering:', error);
    }
  };

  return (
    <MDBContainer fluid className="p-3 my-12">
      <br /><br /><br />
      <MDBRow>
        <MDBCol col='10' md='6'>
          <img style={{ width: "100%" }} src={teacher} alt="Students" />
        </MDBCol>
        <MDBCol col='4' md='6'>
          {/* <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">Sign up with <a href="#"><img src={google} style={{ width: '80px', height: '30px', cursor: 'pointer' }} alt="Google Logo" /></a></p>
          </div>
          <br /><br />
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">OR <a href="#"></a></p>
          </div>
           */}
          <h3>INSTRUCTOR SIGNUP</h3><br />
          <MDBInput
            wrapperClass='mb-4'
            placeholder='Username'
            size="lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <MDBInput
            wrapperClass='mb-4'
            type='email'
            placeholder='Email'
            size="lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <MDBInput
            wrapperClass='mb-4'
            placeholder='Password'
            id='formControlLg'
            type='password'
            size="lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <MDBInput
            wrapperClass='mb-4'
            placeholder='Confirm Password'
            id='formControlLg'
            type='password'
            size="lg"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
          <MDBInput
            wrapperClass='mb-4'
            placeholder='Role'
            value={role} // Pre-fill the role as "Instructor"
            readOnly // Make the input non-editable
            size="lg"
          />
          <div className='text-center text-md-start mt-4 pt-2'>
            <br />
            <button className='btn' size='sm' onClick={handleRegister} style={{ backgroundColor: "gold", color: "black" }}>Sign Up</button>
            <p className="small fw-bold mt-2 pt-1 mb-2">Already a member? <a href="/i_signin" className="link-danger">Login</a></p>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </MDBCol>
      </MDBRow>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5">
        <div className="text-black mb-3 mb-md-0"></div>
        <div>
          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='facebook-f' size="md" />
          </MDBBtn>
          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='twitter' size="md" />
          </MDBBtn>
          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='google' size="md" />
          </MDBBtn>
          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='linkedin-in' size="md" />
          </MDBBtn>
        </div>
      </div>
    </MDBContainer>
  );
}

export default App;
