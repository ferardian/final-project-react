import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '80px',
  padding: '6px',
  margin: '0 3px 3px',
  background: 'green',
  textDecoration: 'none',
  color: 'white',
  borderRadius: '6px',
  position: 'center',
  fontSize: '14px'
}

const NavBar = () =>
  <div className="menu">
    <ul id="nav">
      <li>
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue',
          fontWeight: 'bold'
        }}
      >Home
      </NavLink>
      </li>
      <li>
      <NavLink
        to="/cuaca"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue',
          fontWeight: 'bold'}}
      >Cuaca
      </NavLink>
      </li>
      <li>
      <NavLink
        to="/map"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue',
          fontWeight: 'bold'}}
      >Peta
      </NavLink>
      </li>
      <li>
      <NavLink
        to="/about"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue',
          fontWeight: 'bold'
        }}
      >Tentang
      </NavLink>
      </li>
    </ul>
  </div>

export default NavBar;
//onClick={ refreshPage }
//refresh="true" does NOT WORK in RRv4.0
//let refreshPage = () => window.location.reload();
