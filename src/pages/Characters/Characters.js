import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import CharacterCard from '../../components/CharacterCard';
import s from './Characters.module.scss';

import {CHARACTERS} from '../../mocks/characters';

export const Characters = () => {
    const navigate = useNavigate();
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

    const handleSetShowCharacterBio = (id) => navigate(`/bio/${id}`);

    return (
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
    );
};
