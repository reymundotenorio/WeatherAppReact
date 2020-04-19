import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ city }) => (
  // Destructuring

  // console.log(props);
  // debugger;

  // const city = props.city;

  // const { city } = props; // Destructuring

  <div>
    <h1>{city}</h1>
  </div>
);

// PropTypes
Location.propTypes = {
  city: PropTypes.string,
};

export default Location;
