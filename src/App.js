import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [searchInput, setSearchInput] = useState('');
  const [temperatureData, setTemperatureData] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=341c3d8e7a552a40a96a2278dfa40e88`;
      const response = await fetch(url);
      const resJson = await response.json();
      setTemperatureData(resJson.main);
      // console.log(resJson)
      console.log(temperatureData.temp);
    };

    fetchApi();
  }, [searchInput]);

  return (
    <div className='app'>
      <input
        placeholder="Enter City Name"
        value={searchInput}
        type="text"
        onChange={(e) => setSearchInput(e.target.value)}
      />
     <div className='mainContainer'>

      {!temperatureData ? (
          <div className='container'>
            <strong>No Data Found </strong>
             </div>
        ) : (
          <div className='container'>
        
          <span>{searchInput.toUpperCase()}</span>
          <p>Temperature:- {temperatureData.temp}</p>
          <p>Pressure :- {temperatureData.pressure}</p>
          <p>Humidity :- {temperatureData.humidity}</p>
        </div>
      )}
      </div>
    </div>
  );
}
