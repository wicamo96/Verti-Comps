import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import "./NavBar.css"

export const NavBar = () => {


  return (
    <Navbar className="navColor" container="fluid">
        <NavbarBrand className='textColor' href="/">Verti Comps</NavbarBrand>
          <Nav className="gap-x">
            <NavItem>
              <NavLink className='textColor' href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='textColor' href="/register">Register</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='textColor' href="/leagueLeaderboard">League Leaderboard</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
  );
}
