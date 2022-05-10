import React from 'react';
import {Outlet, useMatch} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Container from '../Container';
import s from './Layout.module.scss';

export const Layout = () => {
    const match = useMatch({path: '/'});

    return (
        <>
            <Header />
            {
                match !== null ? <Outlet /> :
                <div className={s.contentContainer}>
                    <Container>
                        <Outlet />
                    </Container>
                </div>
            }
            <Footer />
        </>
    );
};
