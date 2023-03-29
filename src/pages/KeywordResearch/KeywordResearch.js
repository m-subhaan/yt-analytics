import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar/Sidebar";
import store from '../../redux/store';
import { getChannelLink } from '../../redux/Selectors/selectors';
import { fetchChannelDetails } from "../../services/BoilerService";
import {
  MDBContainer,
} from 'mdb-react-ui-kit';
import "./styles.css";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import AnalyzeKeyword from "./AnalyzeKeyword";
import GenerateTitle from "./GenerateTitle";

const KeywordResearch = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  const [channelDetails, setchannelDetails] = useState({});
  const [activeTab, setActiveTab] = useState('left');

  const handleClick = (event) => {
    setActiveTab(event.target.value);
  };


  useEffect(() => {
    const channelLink = getChannelLink(store.getState());
    const fetchData = async () => {
      try {
        const details = await fetchChannelDetails(channelLink);
        setchannelDetails(details);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, []);
  const renderContent = () => {
    if (activeTab === 'left') {
      return <AnalyzeKeyword />;
    } else if (activeTab === 'middle') {
      return <GenerateTitle />;
    }
  };


  return (
    <div className="d-flex flex-row">

      <SideBar
        toggle={toggleSidebar}
        isOpen={sidebarIsOpen}
        profileImageUrl={channelDetails.profileImageUrl}
        totalSubscribers={channelDetails.totalSubscribers}
        totalViews={channelDetails.totalViews}
      />
      <MDBContainer className="my-5">
      <div className="button-group-container">
        <ButtonGroup aria-label="Basic example" size="lg">
          <Button
            variant={activeTab === 'left' ? 'active' : 'inactive'}
            onClick={handleClick}
            value="left"
          >
            Analyse Keyword
          </Button>
          <Button
            variant={activeTab === 'middle' ? 'active' : 'inactive'}
            onClick={handleClick}
            value="middle"
          >
            Generate Title
          </Button>
        </ButtonGroup>
      </div>
        {renderContent()}
      </MDBContainer>
    </div>
  );
};

export default KeywordResearch;