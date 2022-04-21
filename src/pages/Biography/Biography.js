import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import Container from '../../components/Container';
import s from './Biography.module.scss';

export const Biography = ({id, onBackClick}) => {
    return (
        <div className={s.root}>
            <div className={s.buttonWrapper}>
                <Button variant="white" onClick={onBackClick}>Go back</Button>
            </div>
            <Container className={s.contentWrapper}>
                Biography Page Content fo id {id}
            </Container>
        </div>
    );
};

Biography.propTypes = {
    id: PropTypes.number.isRequired,
    onBackClick: PropTypes.func,
};
