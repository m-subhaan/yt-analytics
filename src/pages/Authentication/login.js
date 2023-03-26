import React, { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
}
  from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import MenuBar from "../../components/Navbar";
import { login } from '../../services/BoilerService'
import Image from '../../assets/image.png';
import { Alert } from "reactstrap";
import store from '../../redux/store';
import { setChannelLinkName } from '../../redux/Actions/Actions';

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [failureAlert, setFailureAlert] = useState(false);
  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const response = await login(username, password)
      if (response?.status === 200) {
        store.dispatch(setChannelLinkName(response?.data?.youtubeChannelLink));
        navigate('/analytics')
      }
    } catch (e) {
      setFailureAlert(true)
    }
    setFailureAlert(true)
  }
  return (
    <>
      <MenuBar />
      {failureAlert && <Alert color='danger'>
        Invalid Credentials
      </Alert>}
      <MDBContainer fluid className="p-3 my-5" style={{ maxWidth: "70%", marginTop: "7%", border: "1px solid #808080" }}>

        <MDBRow>

          <MDBCol col='10' md='6'>
            <img src={Image} class="img-fluid" alt="login" style={{ borderRadius: "2%" }} />
          </MDBCol>

          <MDBCol col='4' mt='6'>
            <p className="h1 fw-bold mb-5">Welcome to <span style={{ color: '#00e778' }}>YT Analytics</span></p>
            <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e) => setUsername(e.target.value)} value={username} placeholder="jon.doe@example.com" />
            <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="********" />

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a style={{ color: '#353738' }} href="/login">Forgot password?</a>
            </div>
            <button type="button" class="btn btn-dark btn-lg mb-5" style={{ width: "100%" }} onClick={() => loginUser()}>Sign in</button>
            <Link to="/signup"><a href='/signup' style={{ color: '#353738' }} className="d-flex justify-content-between mx-4 mb-4" >Don't have an account? Register here</a></Link>
          </MDBCol>

        </MDBRow>

      </MDBContainer>
    </>
  );
}

export default Login;