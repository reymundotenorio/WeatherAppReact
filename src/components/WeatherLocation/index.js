import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => (
  <div>
    <Location city={'Río de Janeiro'} />
    <WeatherData />
  </div>
);

export default WeatherLocation;
