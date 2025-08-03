
import React from 'react';

const IndianPlayers = () => {
  const team = ['Player1', 'Player2', 'Player3', 'Player4', 'Player5', 'Player6'];

  const oddPlayers = team.filter((_, index) => index % 2 === 0);
  const evenPlayers = team.filter((_, index) => index % 2 !== 0);

  const T20players = ['Virat', 'Rohit', 'Bumrah'];
  const RanjiTrophyPlayers = ['Pujara', 'Rahane'];

  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddPlayers.map((player, idx) => <li key={idx}>{player}</li>)}
      </ul>
      <h2>Even Team Players</h2>
      <ul>
        {evenPlayers.map((player, idx) => <li key={idx}>{player}</li>)}
      </ul>
      <h2>All Players (Merged)</h2>
      <ul>
        {allPlayers.map((player, idx) => <li key={idx}>{player}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
