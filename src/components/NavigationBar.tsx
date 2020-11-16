import React from 'react'
import { Link } from '@reach/router'

import { Nav, Navbar } from 'react-bootstrap'

import Logo from './Logo'

const NavigationBar: React.FC = () => {
  return (
    <Navbar expand='lg' variant='dark' bg='dark'>
      <Navbar.Brand>
        <Logo/>
        <Link className='navbar-brand' to='/'>DELISH !</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Item>
            <Link className='nav-link' to='/'>Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className='nav-link' to='/recipes'>Recipes</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className='nav-link' to='/about'>About</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className='nav-link' to='/contact'>Contact</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
