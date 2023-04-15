import React from 'react'
import Marquee from 'react-fast-marquee'

const Marque = () => {
  let salesInfo = '👟👢👠Flash Sales👗👕🎽📱'
  return (
    <div>
      <marquee speed = {60} gradient={false} style={{backgroundColor:'blue',color:'white'}}>
      <h2>{salesInfo}</h2></marquee>
    </div>
  )
}

export default Marque
