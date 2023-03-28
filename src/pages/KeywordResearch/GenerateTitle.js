import React, { useState, useEffect } from "react";
import Autosuggest from 'react-autosuggest';
import axios from "axios";
import store from '../../redux/store';
import { getKeyword } from '../../redux/Selectors/selectors';
import { fetchChannelDetails } from "../../services/BoilerService";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBTextArea,
} from 'mdb-react-ui-kit';
import "./styles.css";
import {setKeyword} from "../../redux/Actions/Actions";


const GenerateTitle = () => {
  const [value, setValue] = useState("");
  const [titleDesc, setTitleDesc] = useState({});

  useEffect(() => {
    setValue(getKeyword(store.getState()))
}, []);

  const handleChangeKeyword = (event) => {
    store.dispatch(setKeyword(event.target.value));
    setValue(event.target.value);
  }

  const generateTitle = async () => {
    setTitleDesc({})
    let { data } = await axios.post('https://flask-production-f273.up.railway.app/generate-content', { input_string: value })
    data = data.generated_sentence?.split('\n').filter(x => x)
    const title = data.shift();
    const description = data.join(' ');
    setValue(title);
    setTitleDesc({ title, description })
  }

  return (
    <div className="d-flex flex-row">
      <MDBContainer className="my-5">
        <MDBRow className="ml-5">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item h4 bold" aria-current="page">Enter a title or generate one automatically</li>
            </ol>
          </nav>
        </MDBRow>
        <MDBRow className="ml-5">
          <MDBCol md="6" >
          <MDBInput wrapperClass='mb-4' label='' id='formControlLg' type='text' size="lg" onChange={handleChangeKeyword} value={value} placeholder="enter a keyword" />
          </MDBCol>
          <MDBCol md="6">
            <button className="btn btn-md btn-outline-dark ml-3 mt-2" onClick={generateTitle}>Generate Title & Description</button>
          </MDBCol>
          <MDBTextArea rows={5} readOnly value={titleDesc.description}/>
        </MDBRow>
      </MDBContainer>


    </div>
  );
};

export default GenerateTitle;

