import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import { TeamPage } from './pages/TeamPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/teams/:teamName">
          <TeamPage />
          </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
