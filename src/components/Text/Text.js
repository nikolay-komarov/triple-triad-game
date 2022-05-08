import React from 'react';
import styled from 'styled-components';
import {space} from 'styled-system';
import PropTypes from 'prop-types';
import {StyledText} from './styled';

export const Text = ({
   element,
   className,
   strong,
   italic,
   disable,
   children,
}) => {
    return (
        <StyledText
            className={className}
            as={element}
            strong={strong}
            italic={italic}
            disable={disable}
        >
            {children}
        </StyledText>
    );
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

export const SpacedText = styled(Text)`
  ${space}
`;
