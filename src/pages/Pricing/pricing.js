import React from "react";
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
}
    from 'mdb-react-ui-kit';
    import './styles.css';

const Pricing = () => {
    return (
        <>
        <MDBContainer className="my-5">
          <MDBRow>
            <MDBCol md='6' className="mx-auto">
              <center>
                <p className="h1 fw-bold mb-2" style={{ color: '#00e778' }}>Pricing Details</p>
                <p className="h3 fw-bold mb-3">Start building today and save hours from the process</p>
                <p className="mb-3">Become part of our club and get access to complete features</p>
              </center>
            </MDBCol>
          </MDBRow>
  
          <MDBRow>
            <MDBCol md='6' className="mx-auto">
            <div className='outer-container'>
              <div className="inner-container">
                <h1>Choose a Plan</h1>
                <div className="price-plan">
                  <h2>Basic</h2>
                  <h3>$9.99 / month</h3>
                  <p>Analytics</p><hr></hr>
                  <p>Analytics</p><hr></hr>
                  <p>Analytics</p><hr></hr>
                  <p>Analytics</p><hr></hr>

                  <button>Select Plan</button>
                </div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </>
    );
};

export default Pricing;
