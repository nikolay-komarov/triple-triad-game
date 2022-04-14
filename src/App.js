import React from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Text from './components/Text';

const App = () => {
    return (
        <>
            <Header />
            <Slider />
            <Text
                element='p'
                strong
                italic
                disable
            >
                simple text
            </Text>
            <Footer />
        </>
    );
}

export default App;
