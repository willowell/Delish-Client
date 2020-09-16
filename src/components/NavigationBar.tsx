import React from 'react'
import { Link } from '@reach/router'

import { Nav, Navbar } from 'react-bootstrap'

import styled from '@emotion/styled'
import { colors } from '../styles/theme'

import logo from '../assets/Delish_200x200.png'

const StyledNavbar = styled.div`
    .navbar {
        background-color: ${colors.accent};
    }

    .navbar-brand, .navbar-nav .nav-link {
        font-family: Mogra;
        font-size: 2rem;
        color: ${colors.primary};

        &:hover {
            color: ${colors.secondary};
        }
    }
`

export default function NavigationBar () {
  return (
    <StyledNavbar>
      <Navbar>
        <Navbar.Brand>
          <img
            src={logo}
            width='60'
            height='60'
            className='d-inline-block align-center'
            alt='Delish logo'
          />
          <Link className="navbar-brand" to="/">DELISH !</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Item>
              <Link className="nav-link" to='/'>Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to='/about'>About</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to='/contact'>Contact</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </StyledNavbar>
  )
}
