import React from 'react';
import PropTypes from "prop-types";
import cn from 'classnames';
import s from './Text.module.css';

export const Text = ({
    element,
    className,
    strong,
    italic,
    disable,
    children,
}) => {
    return React.createElement(
        `${element}`,
            {
                className: cn(
                    s.root,
                    className,
                    {
                        [s.strong]: strong,
                        [s.italic]: italic,
                        [s.disable]: disable,
                    }
                ),
            },
            children
        );
};

Text.propTypes = {
    element: PropTypes.oneOf(['div', 'p', 'span']).isRequired,
    className: PropTypes.string,
    strong: PropTypes.bool,
    italic: PropTypes.bool,
    disable: PropTypes.bool,
    children: PropTypes.node,
};
