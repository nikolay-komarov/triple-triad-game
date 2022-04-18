import React from 'react';
import Container from '../Container';
import Heading from '../Heading';
import logo from '../../assets/logo.png';
import s from './Slider.module.scss';

export const Slider = () => {
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
                        <button className={s.button}>WOW</button>
                    </div>
                </Container>
            </div>
        </section>
    );
};
