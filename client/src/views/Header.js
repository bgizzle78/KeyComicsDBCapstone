import React from 'react';
import { NavLink as RRNavLink } from "react-router-dom";
import { logout } from '../modules/UserProfileManager';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default function Header({ isLoggedIn, setIsLoggedIn }) {

  return (
    <>
      <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto" navbar>
            { /* When isLoggedIn === true, we will render the Home link */}
            {isLoggedIn &&
              <>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/comics">Home</NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink tag={RRNavLink} to="/users">User Profile</NavLink>
                </NavItem> */}
                <NavItem>
                  <NavLink tag={RRNavLink} to="/searchList">Search Comics</NavLink>
                </NavItem>
              </>
            }
          </Nav>
          <Nav navbar>
            {isLoggedIn &&
              <>
                <NavItem>
                  <a aria-current="page" className="nav-link"
                    style={{ cursor: "pointer" }} onClick={() => {
                      logout()
                      setIsLoggedIn(false)
                    }}>Logout</a>
                </NavItem>
              </>
            }
            {!isLoggedIn &&
              <>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/register">Register</NavLink>
                </NavItem>
              </>
            }
          </Nav>
      </Navbar>
    </>
  );
}