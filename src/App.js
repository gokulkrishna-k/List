import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, SignIn, SignUp, Landing } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/signin' component={SignIn} exact />
        <Route path='/signup' component={SignUp} exact />
        <Route path='/' component={Landing} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
