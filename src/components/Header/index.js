import React from 'react';
import s from './styles.module.css';
import MenuItem from "../MenuItem";

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () => {
    return (
        <header className={s.root}>
            <div className={s.header}>
                <div className={s.container}>
                    <div className={s.logo} />
                    <ul className={s.nav}>
                        {
                            MENU.map((item, index) => (
                                <MenuItem key={index} itemName={item} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
