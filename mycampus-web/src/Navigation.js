import React, {Component} from 'react';
import {Nav, Navbar, NavItem, NavLink, NavbarBrand} from 'reactstrap';


class Navigation extends Component {
    state = { };
    
    render() {
        return (
            <div className="Navigation">
              <Navbar color="danger" dark expand="md">
                <NavbarBrand href="/">MyCampus</NavbarBrand>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/profile">Profile</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/events">Events</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/clubs">Clubs</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/login">Login</NavLink>
                    </NavItem>
                  </Nav>
              </Navbar>
            </div>
          );
    }
}

export default Navigation;