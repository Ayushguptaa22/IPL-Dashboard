import {React, useEffect, useState} from 'react';
import './HomePage.scss';
import { TeamTitle } from '../components/TeamTitle';


export const HomePage = ()=>{
    const [teams, setTeams] = useState([]);

    useEffect(
        ()=>{
            const fetchAllTeams = async ()=>{
                const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team`);
                const data = await response.json();
                setTeams(data);
            };
            fetchAllTeams();
        },[]

    );
  return (
    <div className="HomePage">
      <div className='header-name'>
        <h1>IPL Dashboard 2008-2020</h1>
        <p> Select the team you wish to get information about the latest matches</p>
        <p> Select more to see Year wise data </p>
      </div>
      <div className='team-grid'>
            {teams.map(team=> <TeamTitle key={team.id} teamName={team.teamName}/>)}
      </div>
    </div>
  );
}
