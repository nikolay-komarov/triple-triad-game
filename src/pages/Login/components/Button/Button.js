import React from 'react';
import PropTypes from 'prop-types';
import s from '../../Login.module.scss';

export const Button = ({label}) => {
    return (
        <div className={s.buttonContainer}>
            <button><span>{label}</span></button>
        </div>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
};
