import {React} from 'react';
import {Link} from 'react-router-dom';
import './MatchDetailCard.scss';

export const MatchDetailCard = ({teamName, match})=>{
  if(!match)return null;
  const otherTeam=match.team1===teamName? match.team2 : match.team1;
  const isMatchWon = teamName ===match.matchWinner;
    return (
    <div className={isMatchWon ? 'MatchDetailCard won-card' : 'MatchDetailCard lost-card'}>
      <div>
        vs<h2 className='otherTeam'> <Link to={`/teams/${otherTeam}`}>{otherTeam}</Link></h2>
        <h4 className='date'><u>Played On :</u> {match.date} </h4>
        <h4 className='venue'><u>At :</u> {match.venue} </h4>
        <h4 className='winner'> <u>Winning team :</u> {match.matchWinner}</h4> 
        <h4 className='result'> <u>Won by :</u> {match.resultMargin} {match.result} </h4>
      </div>
      {/* <div className='Innings'>
      <h4>First Innings:</h4>
      <p>{match.team1}</p> 
      <h4>Second Innings:</h4>
      <p>{match.team2}</p>
      </div> */}
        
    </div>
  );
}
