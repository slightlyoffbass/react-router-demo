import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

const App = () =>{
    return(
        <BrowserRouter>
            <div>App</div>
        </BrowserRouter>
    );
}

export default App;

// three types of routers in react-router-dom
// - BrowserRouter - Uses everything after the TDL (.com,.net) or port as the 'path'
// - HashRouter - users everything after a # as the 'path'
// - - example: Use for github pages
// - MemoryRouter - does not use URL to track navigation