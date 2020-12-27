import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Marketing from './components/pages/Marketing';
import GetInTouch from './components/pages/GetInTouch';
import Career from './components/pages/Career';
import OurTeam from './components/pages/OurTeam';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/career' component={Career} />
        <Route path='/our-team' component={OurTeam} />
        <Route path='/get-in-touch' component={GetInTouch} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
 