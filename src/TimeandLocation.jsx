import React from 'react'
import { formatToLocalTime } from './FetchedData/FetchedData'

function TimeandLocation({weather: {dt, timezone}}) {
  return (
    <div>
        <div>
           {formatToLocalTime (dt, timezone)}
        </div>
    </div>
  )
}

export default TimeandLocation