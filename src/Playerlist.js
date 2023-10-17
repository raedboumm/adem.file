import React from 'react'
import players from './players'
import Player from './Player'
import './style.css'
const Playerlist = () => {
  return (
    <div className='hello'>
{players.map(el =>
<Player els={el}/>)}



</div>
  )
}

export default Playerlist