import {React, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import './TeamPage.scss';
import {PieChart} from 'react-minimal-pie-chart';

export const TeamPage = ()=>{
    const [team, setTeam] = useState({matches:[]});
    const {teamName} = useParams();

    useEffect(
        ()=>{
            const fetchMatches = async ()=>{
                const response = await fetch(`http://localhost:8080/team/${teamName}`);
                const data = await response.json();
                setTeam(data);
            };
            fetchMatches();
        },[teamName]

    );
         if(!team || !team.teamName){
            return <h1>Team Not Found</h1>
         }
  return (
    <div className="TeamPage">
      <div className='team-name'>
        <h1>{team.teamName}</h1>
      </div>
      <div className='win-loss'>
        <PieChart
          data={[
            {title:'wins', value:team.totalWins, color: 'rgb(162, 13, 13)'},
            {title:'losses', value:team.totalMatches-team.totalWins, color:'rgb(16, 111, 16)'}
          ]}
        />
      </div>
      <div className='details-card'>
        <h3>Latest Match</h3>
        <MatchDetailCard teamName={team.teamName} match={team.matches[0]}/>
      </div>
      {team.matches.slice(1).map(match => <MatchSmallCard teamName={team.teamName} match={match} />)}
      <div><a className='more' href='/teams/{teamName}'>More {'>'}</a></div>
    </div>
  );
}
