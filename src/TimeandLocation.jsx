import React from 'react'
import './TimeandLocation.css'
import { formatToLocalTime } from './FetchedData/FetchedData'

function TimeandLocation({weather: {dt, timezone}}) {
  return (
    <div>
        <div className='details'>
           {formatToLocalTime (dt, timezone)}
        </div>
    </div>
  )
}

export default TimeandLocation