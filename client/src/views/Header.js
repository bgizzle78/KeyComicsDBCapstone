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
      <Navbar className= "navbar" style={{backgroundImage: 'url(https://image.keycollectorcomics.com/media/b1602126092044spiderman_facsimile_1_virigin.jpg)' }}>
          <Nav className="me-auto" navbar>
            { /* When isLoggedIn === true, we will render the Home link */}
            {isLoggedIn &&
              <div className= "nav-link" style= {{  }} >
                <NavItem>
                  <NavLink tag={RRNavLink} to="/comics">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/searchList">Search Comics</NavLink>
                </NavItem>
              </div>
            }
          </Nav>
          <Nav>
            {isLoggedIn &&
              <div className="nav-link" style={{ }}>
                <NavItem>
                  <a aria-current="page"
                    style={{ cursor: "pointer" }} onClick={() => {
                      logout()
                      setIsLoggedIn(false)
                    }}>Logout</a>
                </NavItem>
              </div>
            }
            {!isLoggedIn &&
              <div className="nav-link">
                <NavItem>
                  <NavLink tag={RRNavLink} to="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/register">Register</NavLink>
                </NavItem>
              </div>
            }
          </Nav>
      </Navbar>
    </>
  );
}