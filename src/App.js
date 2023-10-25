import './App.css';
import { Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/header'

import Home from './pages/home.js';
import Profile from './pages/profile.js';

function App() {


  return (
    <div className="h-full">
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
