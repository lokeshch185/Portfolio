import './App.css';
import './index.css'
import Admin from './pages/Admin';
import Home from './pages/Home';
import { Route, Router, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/' element={<Adminlogin/>}/>
        
        
      </Routes>
    </Router>

  );
}

export default App;
