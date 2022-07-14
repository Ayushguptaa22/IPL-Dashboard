import {React} from 'react';
import {Link} from 'react-router-dom';

export const MatchSmallCard = ({teamName,match})=>{
  if(!match) return null;
  const otherTeam=match.team1===teamName? match.team2 : match.team1;

  return (
    <div className="MatchSmallCard">
      <h2> vs <Link to={`/teams/${otherTeam}`}>{otherTeam}</Link></h2>
      <hr/>
        <p>Winning team: {match.matchWinner}</p>
        <b>Won by</b>: {match.resultMargin} {match.result} 
        <hr/>
    </div>
  );
}
