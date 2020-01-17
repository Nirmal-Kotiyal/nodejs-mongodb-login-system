import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Content from './components/Content'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignIn}></Route>
      <Route path="/signup" component={SignUp}></Route>
     <Route path="/Content" component={Content}></Route>
      <h1>OOPS WRONG URL ...... FEELS BAD MAN</h1>
      </Switch>
      </Router>
  );
}

export default App;
