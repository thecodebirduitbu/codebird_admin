import './App.css'
import { Routes,Route} from 'react-router-dom'
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Members from './components/members/Members';
import Event from './components/events/Event';
import CoreTeam from './components/core team/CoreTeam';
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/members" element={<Members/>} />
        <Route path="/events" element={<Event/>} />
        <Route path="/coreteam" element={<CoreTeam/>} />
      </Routes>
    </div>
  );
}

export default App
