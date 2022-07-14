import {React, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { YearSelector } from '../components/YearSelector';
import './MatchPage.scss';

export const MatchPage = ()=>{
  const [matches, setMatches]=useState([]);
  const {teamName, year}=useParams();
  useEffect(
    ()=>{
        const fetchMatches = async ()=>{
            const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
            const data = await response.json();
            setMatches(data);
        };
        fetchMatches();
    },[teamName, year]

);

  return (
    <div className="MatchPage">
        <div className='year-selector'>
          Select Year
          <YearSelector teamName={teamName} />
        </div>
        <div>
        <h1 className='name'>{teamName}- Match Page {year}</h1>
        <h3>{matches.map(match => <MatchDetailCard teamName={teamName} match={match} />)}</h3>
        </div>
    </div>
  );
}
