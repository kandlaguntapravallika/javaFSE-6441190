
import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 85 },
    { name: 'Rohit Sharma', score: 95 },
    { name: 'MS Dhoni', score: 65 },
    { name: 'KL Rahul', score: 45 },
    { name: 'Shubman Gill', score: 75 },
    { name: 'Hardik Pandya', score: 55 },
    { name: 'Ravindra Jadeja', score: 90 },
    { name: 'Bhuvneshwar Kumar', score: 60 },
    { name: 'Jasprit Bumrah', score: 88 },
    { name: 'Yuzvendra Chahal', score: 50 },
    { name: 'Shikhar Dhawan', score: 78 }
  ];

  const filteredPlayers = players.filter(player => player.score >= 70);

  return (
    <div>
      <h2>Players with Score >= 70</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
