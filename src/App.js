import React from 'react';
import './App.css';

import HomePage from './pages/homepage/Homepage.component'
import menuItem from './components/menu-item/menu-item.component';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <menuItem/>
      
    </div>
  );
}

export default App;
