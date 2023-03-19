import React, { useState } from "react";
import SideBar from "../../components/SideBar/Sidebar";
import Chart from "../../components/Chart.jsx";
import "./styles.css";
import {
    MDBContainer,
    MDBRow,
    MDBCol
}
    from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

import DummyClient from "../../assets/client-dummy.png";
import Medal from "../../assets/medal.png";
const Analytics = () => {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);




    return (<div className="d-flex flex-row">
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <MDBContainer className="my-5">
            <MDBRow className="ml-5">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">Analytics</li>
                    </ol>
                </nav>
            </MDBRow>
            <MDBRow>
                <MDBCol md="6" className="mx-auto">
                    <center>
                        <p className="h2 fw-bold mb-2">
                            Do you improve with each new video?
                        </p>
                        <p className="p fw-bold mb-3">
                            Analyzes your latest 5 videos
                        </p>
                    </center>
                </MDBCol>
            </MDBRow>
            <MDBRow className="m-5">
                <MDBCol md="2">
                    <img
                        src={DummyClient}
                        className="img-thumbnail"
                        alt="Profile Picture"
                    />
                </MDBCol>
                <MDBCol md="2" className="d-flex align-items-stretch">
                    <div className="card">
                        <img src={Medal} className="card-img-top p-4" alt="medal" />
                        <div className="card-body">
                            <h6 className="card-title">Channel Growth Speeding Up?</h6>
                            <p className="card-text">yes</p>
                        </div>
                    </div>
                </MDBCol>
                <MDBCol md="2" className="d-flex align-items-stretch">
                    <div className="card">
                        <img src={Medal} className="card-img-top p-4" alt="medal" />
                        <div className="card-body">
                            <h6 className="card-title">Views</h6>
                            <p className="card-text">71 on average</p>
                        </div>
                    </div>
                </MDBCol>
                <MDBCol md="2" className="d-flex align-items-stretch">
                    <div className="card">
                        <img src={Medal} className="card-img-top p-4" alt="medal" />
                        <div className="card-body">
                            <h6 className="card-title">Average View Duration</h6>
                            <p className="card-text">0:50 on average</p>
                        </div>
                    </div>
                </MDBCol>
                <MDBCol md="2" className="d-flex align-items-stretch">
                    <div className="card">
                        <img src={Medal} className="card-img-top p-4" alt="medal" />
                        <div className="card-body">
                            <h6 className="card-title">Likes</h6>
                            <p className="card-text">5 on average</p>
                        </div>
                    </div>
                </MDBCol>
                <MDBCol md="2" className="d-flex align-items-stretch">
                    <div className="card">
                        <img src={Medal} className="card-img-top p-4" alt="medal" />
                        <div className="card-body">
                            <h6 className="card-title">Comments</h6>
                            <p className="card-text">3 on average</p>
                        </div>
                    </div>
                </MDBCol>
            </MDBRow>
            <MDBRow className="m-5">
                <MDBCol md="12" sm="12">
                    <div className="d-flex justify-content-end">
                        <p>
                            *Averages are based on your latest 5 videos
                        </p>
                    </div>
                </MDBCol>
                <MDBCol md="12" sm="12">
                    <div className="d-flex justify-content-end">
                        <p>
                            **Only visitors who subscribed while watching a video are counted
                        </p>
                    </div>
                </MDBCol>
                <MDBCol md="12" sm="12">
                    <div className="d-flex justify-content-end">
                        <p>
                            Many visit the channel page first and subscribe there
                        </p>
                    </div>
                </MDBCol>
                <MDBCol md="12" sm="12">
                    <div>
                        <span>
                            <p>These channel averages*** are used by the
                                <Link to="/keywordresearch"> keyword research tool</Link>
                                &nbsp; to grade your ranking oppurtunity. By growing these numbers you will be able to rank even higher for more competitive search terms.
                            </p>
                        </span>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </div>
    );
};

export default Analytics;