import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import SignUp from './components/auth/Login';
import Review from './pages/Review/Review';
import HeroSection from './components/HeroSecation/';
import Navbar2 from './components/Navbar2';

const App = () =>{
  return (
    <React.Fragment>
      <Router>
      <Navbar2 />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path="/review" component={Review} />
        </Switch>
      </Router>
    
    </React.Fragment>
    
  );
}
export default App;
