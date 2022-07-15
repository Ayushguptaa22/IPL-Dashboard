import './App.scss';
import {React} from 'react';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';
import {HomePage} from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/teams/:teamName/matches/:year" element={<MatchPage />}/>

        <Route path="/teams/:teamName" element={<TeamPage />}/>

        <Route path="/team" element={<HomePage />}/>

        </Routes>
      </Router>
          
    </div>
  );
}

export default App;
