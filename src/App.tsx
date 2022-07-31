import React from 'react';
import './App.scss';
import HeaderComponent from './Components/Header';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
    <Home/>
    </div>
  );
}

export default App;
