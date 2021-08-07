import React from 'react';
import { NavLink } from 'react-router-dom';

type NavBarPropsType = {

};

const NavBar = (props: NavBarPropsType): JSX.Element => (
  <>
    <nav>
      <div className="nav-wrapper px1">
        <a href="/#" className="brand-logo">Logo</a>
        <ul className="right hide-on-med-and-down">
          <li><NavLink to="/">list of deals</NavLink></li>
          <li><NavLink to="/about">info</NavLink></li>
        </ul>
      </div>
    </nav>
  </>
);

export default NavBar;
