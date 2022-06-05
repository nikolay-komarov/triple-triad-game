import React from 'react';
import PropTypes from 'prop-types';
import s from '../../Login.module.scss';

export const Input = ({type, id, name, isRequired, label, value, onChange}) => {
    return (
        <div className={s.inputContainer}>
            <input
                type={type}
                id={`#${id}`}
                name={name}
                {...(isRequired && {required: "required"})}
                value={value}
                onChange={onChange}
            />
            <label htmlFor={`#${id}`}>{label}</label>
            <div className={s.bar}></div>
        </div>
    );
};

Input.defaultProps = {
    type: 'text',
    required: false,
};

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'password']).isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isRequired: PropTypes.bool,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
