
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
    <Navbar>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Nav container: 'fluid'>
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
