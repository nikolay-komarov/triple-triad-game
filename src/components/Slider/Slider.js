import React, {useState} from 'react';
import Container from '../Container';
import Heading from '../Heading';
import Button from "../Button";
import logo from '../../assets/logo.png';
import s from './Slider.module.scss';

export const Slider = () => {
    const [value, setValue] = useState(0);

    const handleClick = () => {
        setValue(prev => ++prev);
    };

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
                    <Heading level={3} className={s.subheader}>{value}</Heading>
                    <div className={s.call}>
                        <Button variant="transparent" onClick={handleClick}>WOW</Button>
                    </div>
                </Container>
            </div>
        </section>
    );
};
