import React from 'react'

import Routes from './Routes'
import MainLayout from './layouts/MainLayout'

function App () {
  return (
    <>
      <MainLayout>
        <Routes />
      </MainLayout>
    </>
  )
}

export default App
