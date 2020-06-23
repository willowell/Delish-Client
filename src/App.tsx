import React from 'react';

import Routes from './Routes'
import MainLayout from './layouts/MainLayout';

function App() {
    return (
        <React.Fragment>
            <MainLayout>
                <Routes />
            </MainLayout>
        </React.Fragment>
    );
}

export default App;