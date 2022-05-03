import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Biography from './pages/Biography';
import Main from './pages/Main';
import Layout from "./components/Layout";
import Characters from "./pages/Characters";
import Contacts from "./pages/Contacts";
import AboutGame from "./pages/AboutGame";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Main />} />
                <Route exec path="characters" element={<Characters />} />
                <Route exec path="contacts" element={<Contacts />} />
                <Route exec path="about" element={<AboutGame />} />
                <Route exec path="bio/:id" element={<Biography />}/>
            </Route>
        </Routes>
    );
};

export default App;
