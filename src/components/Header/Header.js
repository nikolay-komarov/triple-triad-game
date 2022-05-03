import React from 'react';
import {useNavigate} from 'react-router-dom';
import MenuItem from '../MenuItem';
import Container from '../Container';
import logo from '../../assets/logo.png';
import s from './Header.module.scss';

import {MENU} from '../../constants/menu';

export const Header = () => {
    const navigate = useNavigate();
    const handlerMainClick = () => navigate('/');

    return (
        <header className={s.root}>
            <div className={s.header}>
                <Container>
                    <div className={s.logo} onClick={handlerMainClick}>
                        <img
                            src={logo}
                            alt="logo"
                        />
                    </div>
                    <ul className={s.nav}>
                        {
                            MENU.map((item, index) => (
                                <MenuItem key={index} itemLink={item.link} itemName={item.title} />
                            ))
                        }
                    </ul>
                </Container>
            </div>
        </header>
    );
};
