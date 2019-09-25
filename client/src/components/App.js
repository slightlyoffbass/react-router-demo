import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

const App = () =>{
    return(
        <BrowserRouter>
            <div>
                <Route path="/" exact component={StreamList}/>
                <Route path="/streams/new" exact component={StreamCreate}/>
                <Route path="/streams/edit" exact component={StreamEdit}/> 
                <Route path="/streams/delete" exact component={StreamDelete}/> 
                <Route path="/streams/show" exact component={StreamShow}/>                             
            </div>
        </BrowserRouter>
    );
}

export default App;

// three types of routers in react-router-dom
// - BrowserRouter - Uses everything after the TDL (.com,.net) or port as the 'path'
// - HashRouter - users everything after a # as the 'path'
// - - example: Use for github pages
// - MemoryRouter - does not use URL to track navigation