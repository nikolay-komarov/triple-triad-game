import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './Heading.module.scss';

export const Heading = ({
    level,
    className,
    children
}) => {

    return React.createElement(
        `h${level}`,
        {
            className: cn(s.root, className, s[`h${level}`])
        },
        children
    );
};

Heading.propTypes = {
    level: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
};
