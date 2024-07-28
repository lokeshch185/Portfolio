import './App.css';
import './index.css';
import Login from './pages/Admin/AdminLogin';
import Home from './pages/Home/index';
import Admin from './pages/Admin/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/admin-login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
