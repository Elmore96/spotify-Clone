import './App.css';
import LogIn from './components/Log-in';
import { useState } from 'react';
import Header from './components/Header';
import { Context } from './components/Context';

function App() {
  
  const [user, setuser] = useState({ name1: 'keren', password: '1234' })
  return (
    <div className="App">
      <Context.Provider value={{ user, setuser }}>
        <LogIn />
        <Header />
      </Context.Provider>
    </div>
  );
}

export default App;
