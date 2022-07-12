import './App.css';
import { useState, createContext } from 'react';
import Header from './components/Header';
import { Context } from './components/Context';
import { Routes, Route, Navigate } from "react-router-dom";
import LogIn from './components/pages/Log-in';
import Register from './components/pages/Register';
import Home from './components/pages/Home';
import Song from './components/pages/Song';
import PopUp from './components/PopUp';


function App() {
  const [user, setuser] = useState({ email: "", password: '' })
    
  return (
    <div className="App">
      <Context.Provider value={{ user, setuser }}>
        <Routes>
        <Route exact path='/' element={<Navigate to='/log-in'/>}/>
        <Route path='/log-in' element={<LogIn />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/home' element={<div><Home/> <Header/> <PopUp/></div>}/>
        <Route path='/Song/:id' element={<div> <Song/> <Header/>  <PopUp/></div>}/>
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
