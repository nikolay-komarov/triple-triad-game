import React from 'react';
import Container from "../Container";
import Heading from "../Heading";
import s from './Slider.module.css';
import logo from '../../assets/logo.png';

export const Slider = () => {
    return (
        <section className={s.section}>
            <div className={s.slider}>
                <Container className={s.sliderContent}>
                    <Heading level={2} className={s.header}>WOW</Heading>
                    <img
                        src={logo}
                        alt='logo'
                        width='640'
                        height='360'
                    />
                    <div className={s.call}>
                        <button className={s.button}>WOW</button>
                    </div>
                </Container>
            </div>
        </section>
    );
};
