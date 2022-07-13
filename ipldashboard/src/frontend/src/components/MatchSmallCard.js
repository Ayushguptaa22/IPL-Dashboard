import {React} from 'react';

export const MatchSmallCard = ({match})=>{
  return (
    <div className="MatchSmallCard">
      <h2>{match.team1} vs {match.team2}</h2>
      <hr/>
        <p>Winning team: {match.matchWinner}</p>
        <hr/>
    </div>
  );
}
