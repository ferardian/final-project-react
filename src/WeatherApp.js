import React, { Component } from 'react';
import './App.css';
import { Home, Cities, Contact, Map, Weather } from './components'
import { BrowserRouter as Router, Route,Link, Switch } from 'react-router-dom';


// Konfigurasi menu yang terdapat dalam web menggunakan react-router-dom
function WeatherApp() {
  return (
    <Router>
      <div className="App">
        <header className="App-headerku">
          {/* penulisan nama - nama menu */}
         <ul className="header">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/weather">Cuaca</Link></li>
            <li><Link to="/cities">Kota</Link></li>
            <li><Link to="/map">Peta</Link></li>
            <li><Link to="/contact">Kontak Kami</Link></li>
         </ul>
        </header>
        {/* kondisi untuk setiap menu dan kemana saja path akan diarahakn */}
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/weather">
            <Weather/>
          </Route>
          <Route path="/cities">
            <Cities/>
          </Route>
          <Route path="/map">
            <Map/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default WeatherApp;