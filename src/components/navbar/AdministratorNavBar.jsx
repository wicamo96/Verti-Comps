import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export const AdministratorNavBar = () => {
    return (
        <Navbar container="fluid">
            <NavbarBrand href="/">Verti Comps</NavbarBrand>
              <Nav className="gap-x">
                <NavItem>
                  <NavLink href="/create">Create</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/validate">Validate</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/comps">Competitions</NavLink>
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
      );
}