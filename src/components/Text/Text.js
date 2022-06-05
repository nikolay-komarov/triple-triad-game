import React from 'react';
import PropTypes from 'prop-types';
import {StyledText} from './styled';

export const Text = ({element, ...props}) => {
    return <StyledText as={element} {...props} />;
};

Text.defaultProps = {
    element: 'p',
}

Text.propTypes = {
    element: PropTypes.oneOf(['div', 'p', 'span']).isRequired,
    className: PropTypes.string,
    strong: PropTypes.bool,
    italic: PropTypes.bool,
    disable: PropTypes.bool,
    children: PropTypes.node,
};
