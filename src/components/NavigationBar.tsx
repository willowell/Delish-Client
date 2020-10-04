import React from 'react'
import { Link } from '@reach/router'

import { Nav, Navbar } from 'react-bootstrap'

import styled from '@emotion/styled'
import { colors } from '../styles/theme'

import Logo from './Logo'

const StyledNavbar = styled.div`
    .navbar {
        background-color: ${colors.primary.dark};
    }

    .navbar-brand, .navbar-nav .nav-link {
        font-family: Mogra;
        font-size: 2rem;
        color: ${colors.primary.main};

        &:hover {
            color: ${colors.secondary.main};
        }
    }
`

const NavigationBar: React.FC = () => {
  return (
    <StyledNavbar>
      <Navbar>
        <Navbar.Brand>
          <Logo/>
          <Link className="navbar-brand" to="/">DELISH !</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Item>
              <Link className="nav-link" to='/'>Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to='/recipes'>Recipes</Link>
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

export default NavigationBar
