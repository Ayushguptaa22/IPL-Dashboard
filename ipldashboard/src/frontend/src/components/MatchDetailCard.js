import {React} from 'react';

export const MatchDetailCard = ({match})=>{
  if(!match)return null;
    return (
    <div className="MatchDetailCard">
      <h2>Latest Match</h2>
        <h4>{match.team1} vs {match.team2}</h4>
        <h4>Match Details are displayed here</h4>
        <hr/>
        Winning team: {match.matchWinner}
        <br/>
        Man Of the Match: {match.playerOfMatch}
        <hr/>
    </div>
  );
}
