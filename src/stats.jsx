import { useState } from "react";

let points = localStorage.getItem("Points123456789") ? parseInt(localStorage.getItem("Points123456789")) : 10000;
const initialStats = [
  { GamesBJ: 0, 
    WinsBJ: 0, 
    LossesBJ: 0 , 
    GamesHL: 0, 
    WinsHL: 0, 
    LossesHL: 0 , 
    GamesS: 0, 
    WinsS: 0, 
    LossesS: 0, 
    name: "General", 
    Points: points, }
];

export const useStats = () => {
  const [stats, setStats] = useState(
    localStorage.getItem("stats")
      ? JSON.parse(localStorage.getItem("stats"))
      : initialStats
  );

  return [stats, setStats];
};