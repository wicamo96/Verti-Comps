import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export const NavBar = () => {


  return (
    <Navbar container="fluid">
        <NavbarBrand href="/">Verti Comps</NavbarBrand>
          <Nav className="gap-x">
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register">Register</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/leagueLeaderboard">League Leaderboard</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
  );
}
