import React from 'react';
import Container from '../Container';
import Heading from '../Heading';
import Button from "../Button";
import {dummy} from '../../utils/helper';
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
                        <Button variant="transparent" onClick={dummy}>WOW</Button>
                    </div>
                </Container>
            </div>
        </section>
    );
};
