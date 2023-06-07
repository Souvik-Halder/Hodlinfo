import React from 'react'
import {Flat} from '@alptugidin/react-circular-progress-bar'
const ProgressBar = () => {
   
  return (
    <Flat  
    progress={50}
    range={{ from: 0, to: 100 }}
    sign={{ value: '%', position: 'end' }}
    text={'Match'}
    showMiniCircle={true}
    showValue={true}
    sx={{
      strokeColor: '#ff0000',
      barWidth: 5, 
      bgStrokeColor: '#ffffff',
      bgColor: { value: '#000000', transparency: '20' },  
      shape: 'full',
      strokeLinecap: 'round',
      valueSize: 13,
      valueWeight: 'bold',
      valueColor: '#000000',
      valueFamily: 'Trebuchet MS',
      textSize: 13,
      textWeight: 'bold',
      textColor: '#000000',
      textFamily: 'Trebuchet MS',
      loadingTime: 1000,
      miniCircleColor: '#ff0000',
      miniCircleSize: 5,
      valueAnimation: true,
      intersectionEnabled: true
    }}
 />
  )
}

export default ProgressBar
