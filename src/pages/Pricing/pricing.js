import React from "react";
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from 'mdb-react-ui-kit';
import "./styles.css";

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
                        <PricingTable highlightColor='#00e778'>
                            <PricingSlot title='Basic' priceText='$10/month'>
                                <PricingDetail> <b>15</b> projects</PricingDetail>
                                <PricingDetail> <b>5 GB</b> storage</PricingDetail>
                                <PricingDetail> <b>5</b> users</PricingDetail>
                                <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
                                <button style={{
                                    width: "50%",
                                    display: 'block',
                                    margin: '0 auto',

                                }}
                                    className="btn btn-lg btn-dark mt-5">Buy Now</button>
                            </PricingSlot>
                        </PricingTable>
                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </>
    );
};

export default Pricing;
