import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export const CompetitorNavBar = () => {
    return (
        <Navbar container="fluid">
            <NavbarBrand href="/">Verti Comps</NavbarBrand>
              <Nav className="gap-x">
                <NavItem>
                  <NavLink href="/validate">Validate</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/competitions">Competitions</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/leagueLeaderboard">League Leaderboard</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                        href='/login'
                        onClick={() => {
                            localStorage.removeItem("verti_user")
                        }}
                    >
                        Logout
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}