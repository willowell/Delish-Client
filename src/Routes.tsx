import React from 'react'
import { Router } from '@reach/router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

export default function Routes() {
    return (
        <React.Fragment>
            <Router>
                <Home path="/" />
                <About path="/about" />
                <Contact path="/contact" />
            </Router>
        </React.Fragment>
    )
}