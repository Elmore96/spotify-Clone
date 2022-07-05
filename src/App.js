import './App.css';
// import LogIn from './components/Log-in';
import { useState, createContext } from 'react';
import Header from './components/Header';
import { Context } from './components/Context';
import { Routes, Route, Navigate } from "react-router-dom";
import LogIn from './components/pages/Log-in';
import Home from './components/pages/Home';
import Song from './components/pages/Song';


function App() {
  const [user, setuser] = useState({ email: "", password: '' })
    
  return (
    <div className="App">
      <Context.Provider value={{ user, setuser }}>
        <Routes>
        <Route exact path='/' element={<Navigate to='/log-in'/>}/>
        <Route path='/log-in' element={<LogIn />}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/Song/:id' element={<Song/>}/>
        </Routes>
        {/* <Header /> */}
      </Context.Provider>
      {/* <div>
      <button onClick={goToMain}> blabla</button>
      </div>   */}
    </div>
  );
}

export default App;
