import React from 'react'
import './TimeandLocation.css'
import { formatToLocalTime } from './FetchedData/FetchedData'
import PropTypes from 'prop-types';

function TimeandLocation({weather: {dt, timezone}}) {
  return (
    <div>
        <div className='details'>
           {formatToLocalTime (dt, timezone)}
        </div>
    </div>
  )
}
TimeandLocation.propTypes ={
  weather: PropTypes.shape({
    dt: PropTypes.number.isRequired,
    timezone: PropTypes.string.isRequired
  }).isRequired
};

export default TimeandLocation