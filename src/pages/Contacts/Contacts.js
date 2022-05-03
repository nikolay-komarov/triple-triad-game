import React from 'react';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Brick from '../../components/Brick';
import picImg from '../../assets/contacts.png';
import s from './Contacts.module.scss';

export const Contacts = () => {
    return (
        <div className={s.root}>
            <Container>
                <Brick />
                <Heading>Комаров Николай</Heading>
                <img src={picImg} alt="contacs pic" width="176" height="176"/>
                <Brick />
                <Heading level={3}>contacts:</Heading>
                <Brick />
                <a href="https://github.com/nikolay-komarov" target="_blank">github.com/nikolay-komarov</a>
                <Brick />
                <a href="https://career.habr.com/kny-komarov" target="_blank">career.habr.com/kny-komarov</a>
                <Brick />
            </Container>
        </div>
    );
};
