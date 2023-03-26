import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar/Sidebar";
import Autosuggest from 'react-autosuggest';
import axios from "axios";
import store from '../../redux/store';
import { getChannelLink } from '../../redux/Selectors/selectors';
import { fetchChannelDetails } from "../../services/BoilerService";
import {
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import "./styles.css";

import Table from '../../components/table'

const KeywordResearch = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [channelDetails, setchannelDetails] = useState({});
  const [searchKeywordData, setSearchKeywordData] = useState([]);
  const [titleDesc, setTitleDesc] = useState({});



  const sanitize = data => data?.suggestions?.[0]?.split('\n')?.filter(x => x)?.map(x => x?.replace(/\d+. /, '')?.replaceAll('"', ''))

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

  useEffect(() => {
    if (value) {
      const getData = setTimeout(async () => {
        const { data } = await axios.post(`https://flask-production-f273.up.railway.app/search-suggestions`, { prompt: value })
        setSuggestions(sanitize(data))
      }, 500)
      return () => clearTimeout(getData)
    }
  }, [value])

  const handleChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const inputProps = {
    placeholder: "Type something",
    value,
    onChange: handleChange
  };

  const renderSuggestion = (suggestion) => {
    return (
      <span>{suggestion}</span>
    );
  };

  const renderSuggestionsContainer = ({ containerProps, children }) => {
    return (
      <div {...containerProps}>
        <div className="suggestions-container">{children}</div>
      </div>
    );
  };

  const searchkeyword = async () => {
    setSearchKeywordData([])
    setTitleDesc({})
    const regex = /\(([^)]+)\)/;
    let { data } = await axios.post('https://flask-production-f273.up.railway.app/keyword-suggestions-common', { prompt: value })
    data = sanitize(data)
    setSearchKeywordData(data.map(x => ({ tite: x.split('(')?.[0]?.trim(), competition: regex.exec(x)?.[1]?.split(",")?.[0]?.trim(), volume: regex.exec(x)?.[1]?.split(",")?.[1]?.replace(')', '') })))
  }
  const generateTitle = async () => {
    setTitleDesc({})
    setSearchKeywordData([])
    let { data } = await axios.post('https://flask-production-f273.up.railway.app/generate-content', { input_string: value })
    data = data.generated_sentence?.split('\n').filter(x => x)
    const title = data.shift()
    const description = data.join(' ')
console.log(description)
console.log(title)
    setTitleDesc({ title, description })
  }


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
        <MDBRow className="ml-5">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item h2 bold" aria-current="page">Keyword Research</li>
            </ol>
          </nav>
        </MDBRow>
        <MDBRow className="ml-5">
          <MDBCol md="6" >
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={async ({ value }) => { }}
              // onSuggestionsClearRequested={() => {
              //   setSuggestions([]);
              // }}
              getSuggestionValue={(suggestion) => suggestion}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
              renderSuggestionsContainer={renderSuggestionsContainer}
            />
          </MDBCol>
          <MDBCol md="6">
            <button className="btn btn-sm btn-outline-dark mt-0" onClick={searchkeyword}>Analyze Keyword</button>
            <button className="btn btn-sm btn-outline-dark ml-3" onClick={generateTitle}>Generate Title</button>
          </MDBCol>
        </MDBRow>
        <MDBRow
          className="mt-5">
          {searchKeywordData.length > 0 && <Table columns={['Title', 'Competition', 'Volume']} rows={searchKeywordData} />}
        </MDBRow>
        <MDBRow
          className="mt-5">
          {titleDesc?.title && (
            <MDBRow className="ml-5">
                  <p className="h4 bold mb-3" aria-current="page">Title:</p>
                  <p className="h5 bold mb-5" aria-current="page">{titleDesc?.title}</p>
                  <br></br>
                  
                  <p className="h4 bold mb-3"  aria-current="page">Description:</p>
                  <p className="h5 bold mb-3" aria-current="page">{titleDesc?.description}</p>

            </MDBRow>

          )}
        </MDBRow>


      </MDBContainer>


    </div>
  );
};

export default KeywordResearch;