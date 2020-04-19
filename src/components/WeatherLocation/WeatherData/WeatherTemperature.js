import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

const getWeatherIcon = (weatherState) => <WeatherIcons name={weatherState ? weatherState : 'day-sunny'} size='2x' />;

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div>
    {getWeatherIcon(weatherState)}

    <span>{`${temperature} C°`}</span>
  </div>
);

// PropTypes
WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired, // Required
  weatherState: PropTypes.string,
};

export default WeatherTemperature;
