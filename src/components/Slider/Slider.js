import React from 'react';
import {useNavigate} from 'react-router-dom';
import Container from '../Container';
import Heading from '../Heading';
import Button from "../Button";
import logo from '../../assets/logo.png';
import s from './Slider.module.scss';

export const Slider = () => {
    const navigate = useNavigate();
    const handlerMainClick = () => navigate('/characters');

    return (
        <section className={s.section}>
            <div className={s.slider}>
                <Container className={s.sliderContent}>
                    <Heading level={2} className={s.header} backLine>WOW</Heading>
                    <img
                        src={logo}
                        alt="logo"
                        width="640"
                        height="360"
                    />
                    <div className={s.call}>
                        <Button variant="transparent" onClick={handlerMainClick}>WOW</Button>
                    </div>
                </Container>
            </div>
        </section>
    );
};
