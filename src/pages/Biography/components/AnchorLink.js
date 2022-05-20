import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {ReactComponent as AnchorLinkImg} from '../../../assets/icon-link.svg';
import s from './AnchorLink.module.scss';

export const AnchorLink = ({headerTitle}) => {
    const location = useLocation();
    const id = headerTitle.replace(/[^A-Za-z]/g, '_');

    return (
        <div className={s.root}>
            <Link id={id} to={`${location.pathname}#${id}`}>
                <AnchorLinkImg />
            </Link>
        </div>
    )
};
