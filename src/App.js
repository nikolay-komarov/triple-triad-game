import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Biography from './pages/Biography';
import Main from './pages/Main';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/bio" element={<Biography id={1011334}/>}/>
        </Routes>
    );
};

export default App;
