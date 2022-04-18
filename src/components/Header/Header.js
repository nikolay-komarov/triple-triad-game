import React from 'react';
import MenuItem from '../MenuItem';
import Container from '../Container';
import logo from '../../assets/logo.png';
import s from './Header.module.scss';

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

export const Header = () => {
    return (
        <header className={s.root}>
            <div className={s.header}>
                <Container>
                    <div className={s.logo}>
                        <img
                            src={logo}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                            }}
                            alt="logo"
                        />
                    </div>
                    <ul className={s.nav}>
                        {
                            MENU.map((item, index) => (
                                <MenuItem key={index} itemName={item} />
                            ))
                        }
                    </ul>
                </Container>
            </div>
        </header>
    );
};
