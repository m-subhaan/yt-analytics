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
import { getChannelLink } from '../../redux/Selectors/selectors';

import "./styles.css";
import {
    MDBContainer,
    MDBRow,
    MDBCol
}
    from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

import Medal from "../../assets/medal.png";
import { fetchAllVideos, fetchChannelDetails } from "../../services/BoilerService";
const Analytics = () => {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const [videos, setVideos] = useState([]);
    const [channelDetails, setchannelDetails] = useState({});
    const [selectedVideo, setSelectedVideo] = useState(null);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

    useEffect(() => {
        const channelLink = getChannelLink(store.getState());
        const fetchData = async () => {
            try {
                const data = await fetchAllVideos(channelLink);
                const details = await fetchChannelDetails(channelLink);
                setVideos(data);
                setchannelDetails(details);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, []);

    const launchAnalysis = (video) => {
        console.log(video);
        const data = {
            options: {
                chart: {
                    id: "basic-bar",
                },
                xaxis: {
                    categories: ["Likes", "Comments", "Views"],
                },
                yaxis: {
                    categories: [10, 100, 1000],
                },
            },
            series: [
                {
                    name: "series-1",
                    data: [video.likes, video.comments, video.views],
                },
            ],
            title: video.title,
        };

        setSelectedVideo(data);
    }


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
                        <li className="breadcrumb-item h2 bold" aria-current="page">Analytics</li>
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
                            <p className="card-text">{channelDetails.totalComments / channelDetails.totalVideos}</p>
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
                <div className="video-container">
                    {videos.map(video => (
                        <div key={video.id} className="video-item">
                            <img src={video.thumbnailLink} alt="Video Thumbnail" height="100%" width="100%" />
                            <h2 className="mb-3">{video.title}</h2>
                            <p className="mb-3">{video.publishedAt}</p>
                            <p className="mb-3">{video.description}</p>
                            <div className="d-flex mb-5">
                                <FontAwesomeIcon icon={faThumbsUp} className="mr-2 ml-2" />
                                <span>{video.likes} Likes</span>
                                <FontAwesomeIcon icon={faComment} className="mr-2 ml-2" />
                                <span>{video.comments} Comments</span>
                                <FontAwesomeIcon icon={faEye} className="mr-2 ml-2" />
                                <span>{video.views} Views</span>
                            </div>
                            <button className="btn btn-success mb-2" onClick={() => launchAnalysis(video)}>
                                Launch Analysis and Graph
                            </button>
                        </div>
                    ))}
                </div>
                {selectedVideo && (
                    <>
                        <h4>Chart</h4>
                        <p>{selectedVideo.title}</p>
                        <div className="chart-container">
                            <Chart
                                options={selectedVideo.options}
                                series={selectedVideo.series}
                                type="bar"
                                width="500"
                            />
                        </div>
                    </>
                )}
            </MDBRow>
        </MDBContainer>
    </div>
    );
};

export default Analytics;