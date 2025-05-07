import blankcard from './assets/blankCard.png';
import cardImgs from './cards.jsx';
import { useStats } from './stats.jsx';
import { useEffect } from "react";
import { useState } from 'react';
import './styles/games.css';

function Blackjack() {



  //*******************************************************************************? Variables ********************************************************************************

  const [cardshtmlplayer, setCardshtmlplayer] = useState([cardImgs['blankcard'], cardImgs['blankcard']])

  const [cardshtmldealer, setCardshtmldealer] = useState([cardImgs['blankcard'], cardImgs['blankcard']])

  const [stats, setStats] = useStats();

  const [playerCardsBJ, setPlayerCardsBJ] = useState([
    { 
      card: "Blank", 
      value: 1, 
      suit: "", 
      src: blankcard 
    },{ 
      card: "Blank", 
      value: 1, 
      suit: "", 
      src: blankcard 
    },
  ]);

  const [playerStatsBJ, setPlayerStatsBJ] = useState({
    total: 0, 
    notBust: true, 
    myTurn: true, 
    cardsDealt: 1, 
    betOptsShown: false
  });

  const [dealerCardsBJ, setdealerCardsBJ] = useState([
    { 
      card: "Blank", 
      value: 1, 
      suit: "", 
      src: blankcard 
    },{ 
      card: "Blank", 
      value: 1, 
      suit: "", 
      src: blankcard 
    },
  ]);

  const [dealerStatsBJ, setDealerStatsBJ] = useState({
    total: 0, 
    notBust: true, 
    myTurn: false, 
    cardsDealt: 1
  });

  const RanksBJ = [
    {face: "14", value: 1},
    {face: "2", value: 2},
    {face: "3", value: 3},
    {face: "4", value: 4},
    {face: "5", value: 5},
    {face: "6", value: 6},
    {face: "7", value: 7},
    {face: "8", value: 8},
    {face: "9", value: 9},
    {face: "10", value: 10},
    {face:"11" , value: 10},
    {face: "12", value: 10},
    {face: "13", value: 10}
  ];

  const Suits = [
    "D", 
    "H", 
    "C", 
    "S"
  ];

  let points = stats.Points

  let [bet, setBet] = useState(0);

//*****************************************************************************************! useEffects **********************************************************************

  useEffect(() => {
    checkCards('player1')
  }, [cardshtmlplayer])

  useEffect(() => {
    document.title = "Blackjack"
  })

  useEffect(() => {
    checkCards("dealer")
  },[cardshtmldealer])

  useEffect(() => {
    console.log(playerStatsBJ.notBust);
  },[playerStatsBJ.notBust])

  useEffect(() => {
    if (dealerStatsBJ.myTurn === true && dealerStatsBJ.notBust === true) {
      let newCard = pickCardBlackJack();
      
    }
  },[dealerCardsBJ])

  //***************************************************************************************** Functions **********************************************************************

  function updateScore(newPoints) {
    setStats((prevStats) => {
      const updatedStats = [...prevStats];
      updatedStats[3] = { ...updatedStats[3], Points: newPoints }; // Update only the Points field
      return updatedStats;
    });
    localStorage.setItem('Points123456789', points); 
  }
  

  function pickCardSuit() {
    const Suit = Math.random();
    let cardSuit = "none";
    if (Suit <= 0.25) {
      cardSuit = Suits[1];
    } else if (Suit <= 0.5) {
      cardSuit = Suits[2];
    } else if (Suit <= 0.75) {
      cardSuit = Suits[3];
    } else {
      cardSuit = Suits[0];
    }
    return cardSuit;
  };


  function pickCardRankBJ() {
    let index = Math.floor(Math.random() * RanksBJ.length); 
    return RanksBJ[index];
  }
  function pickCardBlackJack() {
    let rank = pickCardRankBJ();
    let suit = pickCardSuit();
    return({
      suit: suit,
      value: rank.value,
      card: suit.concat(rank.face)
    })
  }


  function pickCardsBJ(player) {

    let rank1 = pickCardRankBJ();
    let suit1 = pickCardSuit();
    let rank2 = pickCardRankBJ();
    let suit2 = pickCardSuit();

    if (player === "player1") {
      const updatedPlayerCards = [
        { card: suit1.concat(rank1.face), 
          value: rank1.value, 
          suit: suit1 },
        { card: suit2.concat(rank2.face), 
          value: rank2.value, 
          suit: suit2 },
      ];
      setPlayerCardsBJ(updatedPlayerCards);
      setCardshtmlplayer(() => [cardImgs[`${suit1}${rank1.face}`], cardImgs[`${suit2}${rank2.face}`]])
    } else if (player === "dealer") {
      const updatedPlayerCards = [
        { card: suit1.concat(rank1.face), value: rank1.value, suit: suit1 },
        { card: suit2.concat(rank2.face), value: rank2.value, suit: suit2 },
      ];
      setdealerCardsBJ(updatedPlayerCards);
      setCardshtmldealer([cardImgs[`blankcard`], cardImgs[`${suit2}${rank2.face}`]]);

    };
    
  };


  function hideElement(element1) {
    const elementsToHide = document.getElementsByClassName(element1);
    for (let element of elementsToHide) {
      element.classList.add("hide");
    }
  };


  function showElement(element) {
    const elementsToShow = document.getElementsByClassName(element);
    for (let element of elementsToShow) {
      element.classList.remove("hide");
    }
  };


  function resetBJ() {
    setCardshtmlplayer([blankcard, blankcard]);
    setCardshtmldealer([blankcard, blankcard]);
    setBet(0)
    hideElement("winopt");
    hideElement("resetBJ")
    showElement("dealBJButton-js");
    renderedCards = {player:2 , dealer:2 };
    setPlayerCardsBJ([{card:"Blank", value: 1, suit: ""}, {card:"Blank", value: 1, suit: ""}]);
    //!playerStatsBJ = {total: 0, notBust: true, myTurn: true, cardsDealt: 1, betOptsShown: false};
    setPlayerStatsBJ({total: 0, notBust: true, myTurn: true, cardsDealt: 1, betOptsShown: false})
    setdealerCardsBJ([{card:"Blank", value: 1, suit: ""}, {card:"Blank", value: 1, suit: ""}]);
    //!dealerStatsBJ = {total: 0, notBust: true, myTurn: false, cardsDealt: 1};
    setDealerStatsBJ({total: 0, notBust: true, myTurn: false, cardsDealt: 1})
  };


  function gamble(amount) {
    if (amount > 0 && amount <= points) {
      //!bet += amount;
      setBet(() => bet + amount)
      points -= amount; // Deduct immediately when placing the bet
      updateScore();
    }
  };


  /*function checkCards(player) {
    if (player === "player1") {
        //!playerStatsBJ.total = 0; 
        setPlayerStatsBJ((c) => ({...c, total: 0}))
        for (let i = 0; i < playerCardsBJ.length; i++) {
            //!playerStatsBJ.total += playerCardsBJ[i].value;
            setPlayerStatsBJ((c) => ({...c, total: c.total + playerCardsBJ[i].value}))
        }
        if (playerStatsBJ.total >= 22) {
            //!playerStatsBJ.notBust = false;
            setPlayerStatsBJ((c) => ({...c, notBust: false}));
            if (playerStatsBJ.betOptsShown === true) {
              hideElement("playOpts");
              //!playerStatsBJ.betOptsShown = false;
              setPlayerStatsBJ((c) => ({...c, betOptsShown: false}))
              dealersTurn();
            }
        }
    } else {
        //!dealerStatsBJ.total = 0;
        setDealerStatsBJ((c) => ({...c, total:0}));
        for (let i=0; i <dealerCardsBJ.length; i++) {
          //!dealerStatsBJ.total += dealerCardsBJ[i].value;
          setDealerStatsBJ((c) => ({...c, total: c.total + dealerCardsBJ[i].value}));
        }
        if (dealerStatsBJ.total >= 22) {
          //!dealerStatsBJ.notBust = false;
          setDealerStatsBJ((c) => ({...c, notBust: false}));
        }
    }
  };*/
  function checkCards(player) {
    if (player === "player1") {
      // Calculate the total value of the player's cards
      const total = playerCardsBJ.reduce((sum, card) => sum + card.value, 0);
  
      // Update the player's stats in a single state update
      setPlayerStatsBJ((c) => ({
        ...c,
        total: total,
        notBust: total <= 21, // Player is not bust if total is less than 22
      }));
      // If the player is bust and bet options are shown, hide them and start the dealer's turn
      if (total >= 22 && playerStatsBJ.betOptsShown) {
        hideElement("playOpts");
        setPlayerStatsBJ((c) => ({ ...c, betOptsShown: false }));
        dealersTurn();
      }
    } else {
      // Calculate the total value of the dealer's cards
      const total = dealerCardsBJ.reduce((sum, card) => sum + card.value, 0);
      // Update the dealer's stats in a single state update
      setDealerStatsBJ((c) => ({
        ...c,
        total: total,
        notBust: total <= 21, // Dealer is not bust if total is less than 22
      }));
    }
  }

  function dealBJ() {
    pickCardsBJ("player1");
    pickCardsBJ("dealer");
    hideElement("dealBJButton-js");
    showElement("betOpts");
    checkCards("player1")
    checkCards("dealer")
  };


  function playBJ() {
    hideElement("betOpts");
    if (playerStatsBJ.notBust === true) {
      showElement("playOpts");
      //!playerStatsBJ.betOptsShown = true;
      setPlayerStatsBJ((c) => ({...c, betOptsShown: true}))
  
    } else {
      
    }
  };


  function dealersTurn(currentDealerCards = dealerCardsBJ) {
    const dealerTotal = currentDealerCards.reduce((sum, card) => sum + card.value, 0);

    if (dealerTotal <= 18) {
      const rank = pickCardRankBJ();

      const suit = pickCardSuit();

      const card = { card: suit.concat(rank.face), value: rank.value, suit };

      const updatedDealerCards = [...currentDealerCards, card];

      setdealerCardsBJ(updatedDealerCards);
  
      setTimeout(() => dealersTurn(updatedDealerCards), 500);

    } else {

      stand("dealer");

    }
  }

  function hit(player) {
    const rank = pickCardRankBJ();

    const suit = pickCardSuit();

    const card = suit.concat(rank.face);

    const value = rank.value;
  
    if (player === "player1") {

      setPlayerCardsBJ((c) => [
        ...c,
        { card, value, suit },
      ]);

      setCardshtmlplayer((c) => [...c, cardImgs[`${suit}${rank.face}`]]);

    } else {
      console.log("HIT DEALER")
      setdealerCardsBJ((c) => [
        ...c,
        { card, value, suit },
      ]);

      setCardshtmldealer((c) => [
        ...c, 
        cardImgs[`${suit}${rank.face}`]
      ]);
      console.log(`${suit}${rank.face}`)

      setDealerStatsBJ((c) => (
        { ...c, cardsDealt: c.cardsDealt + 1 }));

    };
  };


  function stand(player) {

    if (player === "player1") {

      if (playerStatsBJ.betOptsShown === true) {

        hideElement("playOpts");

      };

      dealersTurn();

    } else {

      endGame();

    }

  };

  
  function handleBet(amount) {
    gamble(amount)

    playBJ();
  };


  function endGame() {
    checkCards("player1");

    checkCards("dealer");

    RevealDealerCard();

    if (playerStatsBJ.notBust) {
      if (!dealerStatsBJ.notBust) {
        showElement("win-js");
        //?correctGuess();
      } else if (playerStatsBJ.total > dealerStatsBJ.total) {
        showElement("win-js");
        //?correctGuess();
      } else if (playerStatsBJ.total < dealerStatsBJ.total) {
        showElement("lose-js");
        //?incorrectGuess();
      }
  
    } else if (!playerStatsBJ.notBust) {
      showElement("lose-js");
      incorrectGuess();
    }

    showElement("resetBJ");

  };
  

  function RevealDealerCard() {
    //!setCardshtmldealer((c) => [cardImgs[`${dealerCardsBJ[0].card}`], ...c])
    let tempgamesplayed = stats.GamesBJ;
    let tempCardsDealer = []
    for (let i = 0; i < dealerCardsBJ.length; i++) {
      tempCardsDealer.push(cardImgs[`${dealerCardsBJ[i].card}`])
      console.log(dealerCardsBJ[i].card)
    }
    setCardshtmldealer(tempCardsDealer);
    //setCardshtmldealer(() => [])
    //
    //for (let i = 0; i< dealerCardsBJ.length; i++) {
    //  setCardshtmldealer((c) => [...c, cardImgs[`${dealerCardsBJ[i].card}`]])
    //}

  };



  //**************************************************************************************$ HTML ******************************************************************************



  return(
    <>
      
      <div className="playerCard">
      <div>Dealers Cards</div>
      <div className="playerCard dealerCards-js">
        <ul>
          {cardshtmldealer.map((card, index) => <img className="Card" src={card} key={index}></img>)}
        </ul>
      </div>
      <div>Your Cards</div>
      <div className="playerCard playerCards-js">
        <ul>
          {cardshtmlplayer.map((card, index) => <img className="Card" src={card} key={index}></img>)}
        </ul>
      </div>
      </div>
      <div className="hide betOpts">
        <button onClick={() => handleBet(10)}>$10</button>
        <button onClick={() => handleBet(20)}>$20</button>
        <button onClick={() => handleBet(30)}>$30</button>
        <button onClick={() => handleBet(40)}>$40</button>
        <button onClick={() => handleBet(50)}>$50</button>
        <button onClick={() => handleBet(points)}>All in</button>
      </div>
      <div className="win-js hide winopt">
        <h1>You Win!</h1>
      </div>
      <button className="resetBJ hide" onClick={() => resetBJ}>Reset</button>
      <div className="lose-js hide winopt">
        <h1>You Lose!</h1>
      </div>
      <div className="hide playOpts">
        <button onClick={() => hit('player1')}>Hit</button>
        <button onClick={() => stand('player1')}>Stand</button>
      </div>
      <button className="dealBJButton-js" onClick={dealBJ}>Deal</button>
      
    </>
  );
}
export default Blackjack