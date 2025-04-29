import React from "react";
import './styles/games.css'
//import blackjack from'./assets/Blackjack.jpeg';
function Gamecard({game = "Blackjack", gameimg = {blackjack}}) {
  return(
    <>
    <div className="game-card">
      <img className="game-img" src={gameimg}></img>
      <h3 className="name">{game}</h3>
    </div>
    </>
  )
}
export default Gamecard