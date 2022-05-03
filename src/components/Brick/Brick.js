import React from 'react';
import PropTypes from 'prop-types';

const defaultBrickSize = 1;

export const Brick = ({size = defaultBrickSize, children}) => (
    <>
        <div
            style={{minHeight: `${size * 16}px`}}
        >
            {children}
        </div>
    </>
);

Brick.propTypes = {
    size: PropTypes.number,
    children: PropTypes.node,
};
