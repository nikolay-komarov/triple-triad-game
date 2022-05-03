import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export const MenuItem = ({itemLink, itemName}) => {
    return (
        <li><Link to={itemLink}>{itemName}</Link></li>
    );
};

MenuItem.propTypes = {
    itemLink: PropTypes.string,
    itemName: PropTypes.string,
};
