import {React} from 'react';
import {Link} from 'react-router-dom';

export const MatchSmallCard = ({teamName,match})=>{
  if(!match) return null;
  const otherTeam=match.team1===teamName? match.team2 : match.team1;
  const isMatchWon = teamName ===match.matchWinner;

  return (
    <div className={isMatchWon ? 'MatchSmallCard won-card' : 'MatchSmallCard lost-card'}>
      vs
      <h2>
        <Link to={`/teams/${otherTeam}`}>{otherTeam}</Link>
      </h2>
      Won by:
      <h3>{match.resultMargin} {match.result}</h3>
    </div>
  );
}
