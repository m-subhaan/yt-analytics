import React, { useState, useEffect } from "react";
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
import {setKeyword} from "../../redux/Actions/Actions";

const AnalyzeKeyword = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [searchCommonWords, setSearchCommonWords] = useState([]);
  const [searchUncommonWords, setSearchUncommonWords] = useState([]);

  const firstLetters = text => text?.split(' ')?.map(x => x[0]?.toUpperCase())
  const sanitize = data => data?.suggestions?.[0]?.split('\n')?.filter(x => x)?.map(x => x?.replace(/\d+. /, '')?.replaceAll('"', ''))

  useEffect(() => {
    if (value) {
      const getData = setTimeout(async () => {
        const { data } = await axios.post(`https://flask-production-f273.up.railway.app/search-suggestions`, { prompt: value })
        setSuggestions(sanitize(data))
      }, 500)
      return () => clearTimeout(getData)
    }
  }, [value])

  useEffect(() => {
    store.dispatch(setKeyword(''));
  }, [])

  const handleChange = (event, { newValue }) => {
    store.dispatch(setKeyword(newValue));
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
    setSearchCommonWords([])
    setSearchUncommonWords([])
    const regex = /\(([^)]+)\)/;
    const endpoints = ['common', 'uncommon']
    endpoints.map(async endpoint => {
      let { data } = await axios.post(`https://flask-production-f273.up.railway.app/keyword-suggestions-${endpoint}`, { prompt: value })
      data = sanitize(data)
      const trimmed = data.map(x => ({ tite: x.split('(')?.[0]?.trim(), competition: regex.exec(x)?.[1]?.split(",")?.[0]?.trim(), volume: regex.exec(x)?.[1]?.split(",")?.[1]?.replace(')', '') }))
      endpoint == 'common' ? setSearchCommonWords(trimmed) : setSearchUncommonWords(trimmed)
    })

  }

  return (
    <div className="d-flex flex-row">
      <MDBContainer className="my-5">
        <MDBRow className="ml-5">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item h4 bold" aria-current="page">Enter the keyword below to run analysis</li>
            </ol>
          </nav>
        </MDBRow>
        <MDBRow className="ml-5">
          <MDBCol md="6" >
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={async ({ value }) => { }}
              getSuggestionValue={(suggestion) => suggestion}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
              renderSuggestionsContainer={renderSuggestionsContainer}
            />
          </MDBCol>
          <MDBCol md="6">
            <button className="btn btn-md btn-outline-dark mt-2" onClick={searchkeyword}>Analyze Keyword</button>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-5">
          <MDBCol md="6" >
            <div className="h3 bold" >Common Keywords</div>
            <ol>
              {searchCommonWords.map(x => <li>{x.tite} - {firstLetters(x.competition)} - {firstLetters(x.volume)}</li>)}
            </ol>
          </MDBCol>
          <MDBCol md="6" >
            <div className="h3 bold" >Uncommon Keywords</div>
            <ol>
              {searchUncommonWords.map(x => <li>{x.tite} - {firstLetters(x.competition)} - {firstLetters(x.volume)}</li>)}
            </ol>

          </MDBCol>
        </MDBRow>
      </MDBContainer>


    </div>
  );
};

export default AnalyzeKeyword;

