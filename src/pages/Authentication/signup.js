import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput
}
  from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { Alert } from "reactstrap";

import MenuBar from "../../components/Navbar";
import { createUser } from "../../services/BoilerService"
import Image from '../../assets/image.png';


function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [youtubeChannelLink, setYoutubeChannelLink] = useState('');
  const [successAlert, setSuccessAlert] = useState(false);
  const [failureAlert, setFailureAlert] = useState(false);



  const resetStates = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setYoutubeChannelLink('');

  }


  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  }
  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  }
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }
  const handleChangeYoutubeChannelLink = (event) => {
    setYoutubeChannelLink(event.target.value);
  }
  const Signup = async () => {
    try {
      const res = await createUser({
        "fullname": firstName + ' ' + lastName,
        "email": email,
        "password": password,
        "youtubeChannelLink": youtubeChannelLink
      });
      if (res === true) {
        setSuccessAlert(true);
        setTimeout(() => {
          setSuccessAlert(false);
          window.location.href = "/login";
        }, 2000);
      }
    } catch (error) {
      setFailureAlert(true);
      setTimeout(() => {
        setFailureAlert(false);
      }, 2000);
    }
    resetStates();

  }

  return (
    <>
      <MenuBar />
      {successAlert && <Alert>
        User created successfully
      </Alert>}
      {failureAlert && <Alert color='danger'>
        User creation unsuccessful
      </Alert>}
      <MDBContainer className="my-5">

        <MDBCard>
          <MDBRow>

            <MDBCol md='6'>
              <MDBCardImage src={Image} alt="login form" className='rounded-start w-100 mt-3 ml-3'
                style={{ borderRadius: "50%" }} />
            </MDBCol>

            <MDBCol md='6'>
              <MDBCardBody className='d-flex flex-column'>

                <div className='d-flex flex-row mt-2'>
                  <p className="h1 fw-bold mb-0">Welcome to <span style={{ color: '#00e778' }}>YT Analytics</span></p>
                </div>

                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Let's Sign up your account</h5>

                <MDBRow>
                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4'
                      label='First Name'
                      id='firstname'
                      type='text'
                      size="lg"
                      onChange={handleChangeFirstName}
                      value={firstName}
                      placeholder="Jon" />
                  </MDBCol>
                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='Last Name' id='lastname' type='text' size="lg"
                      onChange={handleChangeLastName}
                      value={lastName}
                      placeholder="Doe"
                    />
                  </MDBCol>
                </MDBRow>

                <MDBInput wrapperClass='mb-4' label='Email address' id='email' type='email' size="lg"
                  onChange={handleChangeEmail}
                  value={email}
                  placeholder="jon.doe@example.com"
                />
                <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' size="lg"
                  onChange={handleChangePassword}
                  value={password}
                  placeholder="********"
                />
                <MDBInput wrapperClass='mb-4' label='Youtube Channel Link' id='youtube' type='text' size="lg"
                  onChange={handleChangeYoutubeChannelLink}
                  value={youtubeChannelLink}
                  placeholder="https://www.youtube.com/channel/channel_id"
                />
                <MDBRow>
                  <MDBCol md='12'>
                    <button style={{
                      width: "100%",
                    }}
                      className="btn btn-lg btn-dark mb-2" onClick={Signup}>Signup</button>
                  </MDBCol>
                </MDBRow>
                <Link to="/login">
                  <a href='/login' className="d-flex justify-content-between mb-4 mt-2" style={{ color: '#353738' }}>Already have an account? Login here</a>
                </Link>

              </MDBCardBody>
            </MDBCol>

          </MDBRow>
        </MDBCard>

      </MDBContainer >
    </>
  );
}

export default App;