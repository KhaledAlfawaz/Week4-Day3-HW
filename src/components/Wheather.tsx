import React, { useEffect, useState } from 'react';
import { Button, Center, Heading, Select } from '@chakra-ui/react';
import axios from 'axios';
function Wheather() {
  const [data, setData] = useState<any>();

  const Get = (city: string) => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=8898b81794614021ae900603230802&q=${city}&aqi=no`
      )
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="center">
        <Heading>Select a city:</Heading>
        <Button onClick={() => Get('Riyadh')}>Riyadh</Button>
        <Button onClick={() => Get('Jeddah')}>Jeddah</Button>
        <Button onClick={() => Get('Mecca')}>Mecca</Button>
        <Button onClick={() => Get('Dammam')}>Dammam</Button>
        <Button onClick={() => Get('Abha')}>Abha</Button>
      </div>
      <div className="center2">
        {data != undefined ? (
          <div>
            <p>{'Wheather in ' + data.data.location.name + ':'}</p>
            <img src={data.data.current.condition.icon}></img>
            <p>Temp: {data.data.current.temp_c} C</p>
            <p>Humidity: {data.data.current.humidity}%</p>
            <p>Wind speed: {data.data.current.wind_kph}km/h</p>
          </div>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}

export default Wheather;
