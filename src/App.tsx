import React from 'react';

import Routes from './Routes'
import NavigationBar from './components/NavigationBar';
function App() {
    return (
        <React.Fragment>
            <NavigationBar />
            <Routes />
        </React.Fragment>
    );
}

export default App;