import React from 'react'
import { Router } from '@reach/router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'

export default function Routes() {
    return (
        <React.Fragment>
            <Router>
                <Home path="/" />
                <About path="/about" />
                <Contact path="/contact" />
                <PageNotFound default />
            </Router>
        </React.Fragment>
    )
}