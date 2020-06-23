import React from 'react'

import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'

export default function MainLayout(props: any) {
    return (
        <React.Fragment>
            <NavigationBar />
            { props.children }
            <Footer />
        </React.Fragment>
    )
}