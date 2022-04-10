import React from 'react';
import s from './styles.module.css';

const Header = () => {
    return (
        <header className={s.root}>
            <div className={s.header}>
                <div className={s.container}>
                    <div className={s.logo} />
                    <ul className={s.nav}>
                        <li><a href="#">Menu 1</a></li>
                        <li><a href="#">Menu 2</a></li>
                        <li><a href="#">Menu 3</a></li>
                        <li><a href="#">Menu 4</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
