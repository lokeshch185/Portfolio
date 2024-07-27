import './App.css';
import './index.css';
// import Admin from './pages/Admin';
import Home from './pages/Home/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path='/admin' element={<Admin/>}/> */}
        {/* <Route path='/admin-login' element={<Adminlogin/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
