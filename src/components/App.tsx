import React from 'react';
import logo from '../assets/svg/logo.svg';

const App: React.FC = () => (
  <div className="container">
    <h1 className="flex align-items-center justify-content-center h1">
      <img src={logo} className="logo" alt="logo" />
      Pick a square (Game)
    </h1>
  </div>
)

export default App;
