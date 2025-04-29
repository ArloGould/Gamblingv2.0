import { useState } from "react";

const initialStats = [
  { name: "BlackJack", Games: 0, Wins: 0, Losses: 0 },
  { name: "High-Low", Games: 0, Wins: 0, Losses: 0 },
  { name: "Slots", Games: 0, Wins: 0, Losses: 0 },
];

export const useStats = () => {
  const [stats, setStats] = useState(
    localStorage.getItem("stats")
      ? JSON.parse(localStorage.getItem("stats"))
      : initialStats
  );

  return [stats, setStats];
};