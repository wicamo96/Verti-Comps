import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import "./NavBar.css"

export const CompetitorNavBar = () => {
    return (
        <Navbar className='navColor' container="fluid">
            <NavbarBrand className='textColor' href="/">Verti Comps</NavbarBrand>
              <Nav className="gap-x">
                <NavItem>
                  <NavLink className='textColor' href="/validate">Scorecard</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='textColor' href="/competitions">Competitions</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='textColor' href="/leagueLeaderboard">League Leaderboard</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className='textColor' 
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