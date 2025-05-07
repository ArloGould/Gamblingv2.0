import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/games.css'
import Gamecard from './Gamecard.jsx';
import blackjack from'./assets/Blackjack.jpeg';
import highlow from './assets/High-Low.jpeg'
import slots from './assets/slots.jpeg'
function Games() {
  const navigate = useNavigate();
  return (
    <>
      <div className='gameGrid'>
        <Gamecard game="Blackjack" gameimg={blackjack}/>
        <Gamecard game="High-Low" gameimg={highlow}/>
        <Gamecard game="Slots" gameimg={slots}/>
      </div>
      
    </>
  );
}

export default Games;