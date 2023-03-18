import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
}
  from 'mdb-react-ui-kit';
  import  { Link } from 'react-router-dom';

  import MenuBar from "../../components/Navbar";

  import Image from '../../assets/image.png';

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [clickSignIn, setClickSignIn] = useState(false)

  useEffect(() => {
    setClickSignIn(false)
    setUsername('')
    setPassword('')
  }, [clickSignIn])
  return (
    <>
    <MenuBar/>
    <MDBContainer fluid className="p-3 my-5" style={{ maxWidth: "70%", marginTop: "7%", border:"1px solid #808080"}}>

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src={Image} class="img-fluid" alt="login" style={{borderRadius: "2%"}}/>
        </MDBCol>

        <MDBCol col='4' mt='6'>
        <p className="h1 fw-bold mb-5">Welcome to <span style={{color:'#00e778'}}>YT Analytics</span></p>
          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e) => setUsername(e.target.value)} value={username} placeholder="jon.doe@example.com"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="********"/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a style={{color:'#353738'}} href="/login">Forgot password?</a>
          </div>
          <Link to="/dashboard"><button type="button" class="btn btn-dark btn-lg mb-5" style={{ width: "100%" }} onClick={() => setClickSignIn(true)}>Sign in</button></Link>

          {/* <MDBBtn className="mb-4 w-100" size="lg" onClick={setClickSignIn(true)}>Sign in</MDBBtn> */}
          {/* <MDBBtn className="mb-4 w-100" size="lg" onClick={(e)=>console.log('clicked')}>Sign in</MDBBtn> */}
          <Link to="/signup"><a href='/signup' style={{color:'#353738'}} className="d-flex justify-content-between mx-4 mb-4" >Don't have an account? Register here</a></Link>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </>
  );
}

export default Login;