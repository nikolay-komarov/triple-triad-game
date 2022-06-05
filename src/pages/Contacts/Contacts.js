import React from 'react';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import picImg from '../../assets/contacts.png';
import {LinkWrapper, StyledImg} from './styled';

export const Contacts = () => {
    return (
        <Container>
            <Heading mt={3} mb={4}>Комаров Николай</Heading>
            <StyledImg src={picImg} alt="contacs pic" width="176" height="176" mb={3} />
            <Heading level={3} mb={3}>contacts:</Heading>
            <LinkWrapper mb={3}><a href="https://github.com/nikolay-komarov" target="_blank" rel="noreferrer">github.com/nikolay-komarov</a></LinkWrapper>
            <LinkWrapper mb={3}><a href="https://career.habr.com/kny-komarov" target="_blank" rel="noreferrer">career.habr.com/kny-komarov</a></LinkWrapper>
        </Container>
    );
};
