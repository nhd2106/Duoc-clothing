import React from 'react';
import './App.css';
 import {Route, Switch, Link} from 'react-router-dom';

import HomePage from './pages/homepage/Homepage.component'

const Hats = (props) => {
  console.log(props);
  return (
    <div>
    <h1>hat detail: {props.match.params.id}</h1>

  </div>
    
  )
};
function App() {
  return (
    <div >
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/hat" component={Hats}/>

      
    

    </div>
  );
}

export default App;
