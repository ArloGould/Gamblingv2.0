import React from "react";
import './styles/games.css'
import { useNavigate } from 'react-router-dom';
//import blackjack from'./assets/Blackjack.jpeg';
function Gamecard({game = "Blackjack", gameimg = {blackjack}}) {
  const navigate = useNavigate();
  return(
    <>
    <div className="game-card" onClick={() => navigate(`/${game}`)}>
      <img className="game-img" src={gameimg}></img>
      <h3 className="name">{game}</h3>
    </div>
    </>
  )
}
export default Gamecard