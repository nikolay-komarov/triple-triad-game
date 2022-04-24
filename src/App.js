import React, {useState} from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Container from './components/Container';
import Heading from './components/Heading';
import CharacterCard from './components/CharacterCard';
import Biography from './pages/Biography';
import {CHARACTERS} from './mocks/characters';
import s from './App.module.scss';

const App = () => {
    const [showedIdCharacter, setShowedIdCharacter] = useState(null);
    const [characters, setCharacters] = useState(CHARACTERS);
    const handleLikeClick = (id) => {
        setCharacters(prevState => prevState.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        isLike: !item.isLike
                    }
                }
                return item;
            })
        );
    };

    const handleSetShowCharacterBio = (id) => setShowedIdCharacter(id);

    return (
        <>
            <Header />
            {
                !!showedIdCharacter
                ? (
                    <Biography
                        id={showedIdCharacter}
                        onBackClick={handleSetShowCharacterBio}
                    />
                )
                : (
                    <>
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
                                    {
                                        characters.map(item => (
                                            <div key={item.id}>
                                                <CharacterCard
                                                    src={item.thumbnail.path}
                                                    onLikeClick={handleLikeClick}
                                                    onReadBioClick={handleSetShowCharacterBio}
                                                    {...item}
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                            </Container>
                        </section>
                    </>
                )
            }
            <Footer />
        </>
    );
}

export default App;
