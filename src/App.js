import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Biography from './pages/Biography';
import Main from './pages/Main';
import Layout from './components/Layout';
import Characters from './pages/Characters';
import Contacts from './pages/Contacts';
import AboutGame from './pages/AboutGame';
import NotFound from './pages/NotFound';
import Login from "./pages/Login";
import {ScrollTo} from "./components/ScrollTo/ScrollTo";

const App = () => {
    return (
        <>
            <ScrollTo />
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Main />} />
                    <Route exec path="characters" element={<Characters />} />
                    <Route exec path="contacts" element={<Contacts />} />
                    <Route exec path="about" element={<AboutGame />} />
                    <Route exec path="bio/:id" element={<Biography />}/>
                    <Route path="*" element={<NotFound />}/>
                </Route>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </>
    );
};

export default App;
