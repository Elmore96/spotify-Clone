import './App.css';
import LogIn from './components/Log-in';
import { useState, createContext } from 'react';
import Header from './components/Header';
import { Context } from './components/Context';
import { Routes, Route, Navigate } from "react-router-dom";


function App() {
  const [user, setuser] = useState({ name: "", password: '' })
    
  return (
    <div className="App">
      <Context.Provider value={{ user, setuser }}>
        <Routes>
        <Route exact path='/' element={<Navigate to='/log-in'/>}/>
        <Route path='/log-in' element={<LogIn />}/>
        <Route path='/home' element={'home'}/>
        </Routes>
        <Header />
      </Context.Provider>
      {/* <div>
      <button onClick={goToMain}> blabla</button>
      </div>   */}
    </div>
  );
}

export default App;
