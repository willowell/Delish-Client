import React from 'react'

import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'

const MainLayout: React.FC = (props) => {
  return (
    <>
      <NavigationBar />
      {props.children}
      <Footer />
    </>
  )
}

export default MainLayout
