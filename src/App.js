import React from 'react';
import { useState } from "react";
import { useSelector,useDispatch } from 'react-redux';
import { Input, List } from "antd";
import { countryList } from "./util";

import Map from './views/Map'

function sleep(time){
    return new Promise((resolve)=>setTimeout(resolve,time)
  )
  }

  export default function App()  {

    
  const {CountryListnName} = useSelector(state => state.SaveSearchReducer);

  //Use for all the dispatch actions
  const dispatch = useDispatch();

    const [value, setValue] = useState("Malaysia");
    const [countryLatLong, setCountryLatLong] = useState(  [
        "Malaysia",
        2.5,
        112.5
    ])
    const [isPlacePredictionsLoading, PlacePredictionsLoading] = useState(false);
  
    const [countries, setCountries] = useState(countryList.filter((country)=> country[0].toLowerCase().includes('Malaysia'.toLowerCase())))
  
  

    function setLatandLong (countryLatLon) {
        setCountryLatLong(countryLatLon)
        setValue(countryLatLon[0])
        dispatch({type:'SAVE_USER_INPUT',payload:countryLatLon[0]});
    }
    async  function searchCountry (value) {
  
    //   setCountryLatLong(value)
      PlacePredictionsLoading(true)
      let filterCountries = countryList.filter((country)=> country[0].toLowerCase().includes(value.toLowerCase()))
      setCountries(filterCountries)
      await sleep(1000);
      PlacePredictionsLoading(false)
    }
  
  
  
    return (
        <div className="App">
        <main className="container">
    
    <div style={{display: 'flex', marginTop:'20px'}}> 
    <div style={{width:"50%"}}>    
     <div style={{ width: "250px" , marginBottom: '100px' }}>
        <span>Country</span>
        <Input.Search
          style={{ color: "black" }}
          value={value}
          placeholder="Enter Country Name"
          onChange={(evt) => {
            setValue(evt.target.value);
            searchCountry(evt.target.value)
          }}
          loading={isPlacePredictionsLoading}
        />
          {!isPlacePredictionsLoading && (
                  <List
                  size="small"
                  style={{maxHeight:'200px', overflow:'auto', minWidth:'200px'}}
                  bordered
                  dataSource={countries}
                  renderItem={(item) => <List.Item onClick={() => setLatandLong(item)} >{item[0]}</List.Item>}
                />
          )}
        </div>
        </div>
        <div style={{width:"50%"}}>    

        <div style={{ width: "250px" , marginBottom: '100px' }}>
        <span>User History Search(Redux Used)</span>
                  <List
                  size="small"
                  style={{maxHeight:'200px', overflow:'auto', minWidth:'200px'}}
                  bordered
                  dataSource={CountryListnName}
                  renderItem={(item) => <List.Item  >{item}</List.Item>}
                />
        </div>
        </div>
        </div>


            <Map countryLatLong={countryLatLong}/>
        </main>
        </div>
    );
  };
