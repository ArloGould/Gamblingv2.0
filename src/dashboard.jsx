import React from "react";
import "./styles/dashboard.css";
import { useStats } from "./stats.jsx";

function Dashboard() {
  const [stats] = useStats(); // Access stats using the custom hook

  return (
    <>
      <div className="title-container">
        <h1 className="title">Dashboard</h1>
      </div>
      <div className="StatsBlock">
        {stats.map((game, index) => (
          <div key={index}>
            <h3>{game.name}</h3>
            <p>Wins: {game.Wins}</p>
            <p>Losses: {game.Losses}</p>
            <p>Total Games: {game.Games}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Dashboard;