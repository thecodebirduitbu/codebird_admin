import './App.css'
import { Routes,Route} from 'react-router-dom'
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Members from './components/members/Members';
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/members" element={<Members/>} />
      </Routes>
    </div>
  );
}

export default App
