import React from 'react';
import s from './styles.module.css';

const Footer = () => {
    return (
        <footer className={s.root}>
            <div className={s.container}>
                <div className={s.footerWrap}>
                    Coded with
                    <span className={s.heart} />
                    by You
                </div>
            </div>
        </footer>
    );
};

export default Footer;
