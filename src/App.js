import './App.css';
// import LogIn from './components/Log-in';
import { useState, createContext } from 'react';
import Header from './components/Header';
import { Context } from './components/Context';
import { Routes, Route, Navigate } from "react-router-dom";
import LogIn from './components/pages/Log-in';
import Home from './components/pages/Home';


function App() {
  const [user, setuser] = useState({ name: "", password: '' })
    
  return (
    <div className="App">
      <Context.Provider value={{ user, setuser }}>
        <Routes>
        <Route exact path= '/spotify-Clone' element={<Navigate to='/spotify-Clone/log-in'/>}/>
        <Route exact path='/' element={<Navigate to='/spotify-Clone/log-in'/>}/>
        <Route path='/spotify-Clone/log-in' element={<LogIn />}/>
        <Route path='/spotify-Clone/home' element={<Home/>}/>
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
