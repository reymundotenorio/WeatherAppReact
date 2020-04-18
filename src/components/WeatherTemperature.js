import React from 'react';
import WeatherIcons from 'react-weathericons';

const getWeatherIcon = (weatherState) => <WeatherIcons name={weatherState ? weatherState : 'day-sunny'} size='2x' />;

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div>
    {getWeatherIcon(weatherState)}

    <span>{`${temperature} C°`}</span>
  </div>
);

export default WeatherTemperature;
