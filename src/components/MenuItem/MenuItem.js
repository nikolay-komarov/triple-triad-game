import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import s from './MenuItem.module.scss';

export const MenuItem = ({itemLink, itemName}) => {
    return (
        <li className={s.root}>
            <NavLink
                to={itemLink}
                className={({isActive}) => {
                    return !!isActive ? s.active : null;
                }}
            >
                {itemName}
            </NavLink>
        </li>
    );
};

MenuItem.propTypes = {
    itemLink: PropTypes.string,
    itemName: PropTypes.string,
};
