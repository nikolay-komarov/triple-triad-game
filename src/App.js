import React from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Container from './components/Container';
import Heading from './components/Heading';
import s from './App.module.scss';

const App = () => {
    return (
        <>
            <Header />
            <Slider />
            <section className={s.cardSection}>
                <Container>
                    <div className={s.cardTitle}>
                        <Heading backLine>
                            Marvel Cards
                        </Heading>
                        <Heading level={2}>
                            Collect your best five cards
                        </Heading>
                    </div>
                    <div className={s.cardWrapper}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    );
}

export default App;
