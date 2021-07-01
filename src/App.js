import React from 'react';
import Login from './Login';
import Signup from './Signup' 
import './App.css';
import { Route, Switch } from "react-router-dom";
// import { useForm } from 'react-hook-form';


function App() {
  return (
    <div>
      <Switch>
       <Route exact path="/login" component={Login} />
       <Route exact path="/signup" component={Signup} /> 
       {/* <Route component={error}/> */}
      </Switch>
      {/* <Login />
      <Signup /> */}  

    </div>
  );
}

export default App;
