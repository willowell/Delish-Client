import React from 'react'

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
        <Navbar.Brand href='/'>
          <img
            src={logo}
            width='60'
            height='60'
            className='d-inline-block align-center'
            alt='Delish logo'
          />
                    DELISH !
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Item>
              <Nav.Link href='/'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/about'>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/contact'>Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </StyledNavbar>
  )
}
