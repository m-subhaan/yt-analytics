import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
  MDBCardTitle
}
  from 'mdb-react-ui-kit';
  import Image from '../../assets/image.png';

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [clickSignIn, setClickSignIn] = useState(false)

  useEffect(() => {
    console.log(username, password)
    setClickSignIn(false)
    setUsername('')
    setPassword('')
  }, [clickSignIn])
  return (
    <MDBContainer fluid className="p-3 my-5v" style={{ maxWidth: "70%", marginTop: "7%", border:"1px solid #808080"}}>

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src={Image} class="img-fluid" alt="Phone image" style={{borderRadius: "2%"}}/>
        </MDBCol>

        <MDBCol col='4' mt='6'>
        <p className="h1 fw-bold mb-5">Welcome to <span style={{color:'#00e778'}}>YT Analytics</span></p>
          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e) => setUsername(e.target.value)} value={username} placeholder="jon.doe@example.com"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="********"/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a style={{color:'#353738'}} href="#">Forgot password?</a>
          </div>
          <button type="button" class="btn btn-dark btn-lg mb-5" style={{ width: "100%" }} onClick={() => setClickSignIn(true)}>Sign in</button>

          {/* <MDBBtn className="mb-4 w-100" size="lg" onClick={setClickSignIn(true)}>Sign in</MDBBtn> */}
          {/* <MDBBtn className="mb-4 w-100" size="lg" onClick={(e)=>console.log('clicked')}>Sign in</MDBBtn> */}
          <a href="signup" style={{color:'#353738'}} className="d-flex justify-content-between mx-4 mb-4" >Don't have an account? Register here</a>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;