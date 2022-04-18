import React from 'react';
import Container from '../Container';
import s from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={s.root}>
            <Container>
                <div className={s.footerWrap}>
                    Coded with
                    <span className={s.heart} />
                    by You
                </div>
            </Container>
        </footer>
    );
};
