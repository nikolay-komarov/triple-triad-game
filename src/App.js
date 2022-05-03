import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Biography from './pages/Biography';
import Main from './pages/Main';
import Layout from "./components/Layout";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Main />} />
                <Route path="/bio" element={<Biography id={1011334}/>}/>
            </Route>
        </Routes>
    );
};

export default App;
