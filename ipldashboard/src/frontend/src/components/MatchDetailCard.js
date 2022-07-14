import {React} from 'react';
import {Link} from 'react-router-dom';

export const MatchDetailCard = ({teamName, match})=>{
  if(!match)return null;
  const otherTeam=match.team1===teamName? match.team2 : match.team1;
    return (
    <div className="MatchDetailCard">
      <h3>Latest Match</h3>
        <h2>vs <Link to={`/teams/${otherTeam}`}>{otherTeam}</Link></h2>
        <h4>Match Details are displayed here</h4>
        <hr/>
        <b>Played On</b>: {match.date} | 
        <b> Winning team</b>: {match.matchWinner} | 
        <b> Man Of the Match</b>: {match.playerOfMatch}
        <br/>
        <b>Won by</b>: {match.resultMargin} {match.result} 
        <hr/>
    </div>
  );
}
