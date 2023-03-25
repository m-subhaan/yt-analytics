import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faThumbsUp,
    faEye,
    faComment,
} from "@fortawesome/free-solid-svg-icons";
import SideBar from "../../components/SideBar/Sidebar";
import Chart from "../../components/Chart.jsx";
import store from '../../redux/store';
import { getChannelLinkName } from '../../redux/Selectors/selectors';

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
import { fetchAllVideos, fetchChannelDetails } from "../../services/BoilerService";
const Analytics = () => {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const [videos, setVideos] = useState([]);
    const [channelDetails, setchannelDetails] = useState({});

    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

    useEffect(() => {
        // const channelLinkName = getChannelLinkName(store.getState());
        const channelLinkName = 'UCn6j6z1YgWP5iTQFFf8jBaA';
        const fetchData = async () => {
            try {
                const data = await fetchAllVideos(channelLinkName);
                const details = await fetchChannelDetails(channelLinkName);
                setVideos(data);
                setchannelDetails(details);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, []);


    return (<div className="d-flex flex-row">
        <SideBar 
        toggle={toggleSidebar} 
        isOpen={sidebarIsOpen} 
        profileImageUrl={channelDetails.profileImageUrl} 
        totalSubscribers={channelDetails.totalSubscribers} 
        totalViews={channelDetails.totalViews}
        />
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

                        src={channelDetails.profileImageUrl}
                        className="img-thumbnail"
                        alt="Profile"
                    />
                    <center><p>{channelDetails.channelName}</p></center>
                </MDBCol>
                <MDBCol md="2" className="d-flex align-items-stretch">
                    <div className="card">
                        <img src={Medal} className="card-img-top p-4" alt="medal" />
                        <div className="card-body">
                            <h6 className="card-title">Total Subscribers</h6>
                            <p className="card-text">{channelDetails.totalSubscribers}</p>
                        </div>
                    </div>
                </MDBCol>
                <MDBCol md="2" className="d-flex align-items-stretch">
                    <div className="card">
                        <img src={Medal} className="card-img-top p-4" alt="medal" />
                        <div className="card-body">
                            <h6 className="card-title">Total Videos</h6>
                            <p className="card-text">{channelDetails.totalVideos}</p>
                        </div>
                    </div>
                </MDBCol>
                <MDBCol md="2" className="d-flex align-items-stretch">
                    <div className="card">
                        <img src={Medal} className="card-img-top p-4" alt="medal" />
                        <div className="card-body">
                            <h6 className="card-title">Total Comments</h6>
                            <p className="card-text">{channelDetails.totalComments}</p>
                        </div>
                    </div>
                </MDBCol>
                <MDBCol md="2" className="d-flex align-items-stretch">
                    <div className="card">
                        <img src={Medal} className="card-img-top p-4" alt="medal" />
                        <div className="card-body">
                            <h6 className="card-title">Total Views</h6>
                            <p className="card-text">{channelDetails.totalViews}</p>
                        </div>
                    </div>
                </MDBCol>
                <MDBCol md="2" className="d-flex align-items-stretch">
                    <div className="card">
                        <img src={Medal} className="card-img-top p-4" alt="medal" />
                        <div className="card-body">
                            <h6 className="card-title">Comments/video</h6>
                            <p className="card-text">{channelDetails.totalComments/channelDetails.totalVideos}</p>
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
            <MDBRow>
                <MDBCol md="6" className="mx-auto">
                    <center>
                        <p className="h2 fw-bold mb-2">
                            How did your videos perform?
                        </p>
                    </center>
                </MDBCol>
                {videos.map(video => {
                    return (
                        <MDBRow className="my-4">
                            <MDBCol md="4">
                                <img src={video.thumbnailLink} alt="Video Thumbnail" height="300px" width="300px" />
                            </MDBCol>
                            <MDBCol md="8">
                                <h2>{video.title}</h2>
                                <p>{video.publishedAt}</p>
                                <p>{video.description}</p>
                                <div className="d-flex align-items-center mb-3">
                                    <FontAwesomeIcon icon={faThumbsUp} className="mr-2 ml-2" />
                                    <span>{video.likes} Likes</span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <FontAwesomeIcon icon={faComment} className="mr-2 ml-2" />
                                    <span>{video.comments} Comments</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faEye} className="mr-2 ml-2" />
                                    <span>{video.views} Views</span>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    )
                })}
            </MDBRow>
        </MDBContainer>
    </div>
    );
};

export default Analytics;