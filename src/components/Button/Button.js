import React from 'react';
import PropTypes from "prop-types";
import cn from 'classnames';
import s from './Button.module.scss';

export const Button = ({variant, onClick, children}) => {
    return (
        <button
            className={cn(
                s.root,
                {
                    [s.root__transparent]: variant === "transparent",
                    [s.root__white]: variant === "white",
                },
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    variant: 'transparent',
};

Button.propTypes = {
    variant: PropTypes.oneOf(['transparent', 'white']),
    onClick: PropTypes.func,
    children: PropTypes.node,
};