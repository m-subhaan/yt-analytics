import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar/Sidebar";
import Autosuggest from 'react-autosuggest';
import axios from "axios";
import { debounce } from 'lodash'
import store from '../../redux/store';
import { getChannelLink } from '../../redux/Selectors/selectors';
import { fetchChannelDetails } from "../../services/BoilerService";

import "./styles.css";

const KeywordResearch = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [channelDetails, setchannelDetails] = useState({});


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
    const getData = setTimeout(async () => {
      const res = await axios.post(`https://flask-production-f273.up.railway.app/search-suggestions`, { prompt: value })
      setSuggestions(res.data?.suggestions[0]?.split('\n')?.filter(x => x)?.map(x => x?.replace(/\d+. /, '')?.replaceAll('"', '')))
    }, 500)

    return () => clearTimeout(getData)

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

  return (
    <div className="d-flex flex-row">
      <SideBar
        toggle={toggleSidebar}
        isOpen={sidebarIsOpen}
        profileImageUrl={channelDetails.profileImageUrl}
        totalSubscribers={channelDetails.totalSubscribers}
        totalViews={channelDetails.totalViews}
      />
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

    </div>
  );
};

export default KeywordResearch;