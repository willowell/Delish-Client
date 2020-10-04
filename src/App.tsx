import React from 'react'

import Routes from './Routes'
import MainLayout from './layouts/MainLayout'

const App: React.FC = () => {
  return (
    <>
      <MainLayout>
        <Routes />
      </MainLayout>
    </>
  )
}

export default App
