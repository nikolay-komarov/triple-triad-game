import React from 'react';
import {ReactComponent as HeartLogo} from './assets/heart.svg';
import Heading from '../Heading';
import Text from '../Text';
import s from './CharacterCard.module.scss';

const CHARACTER = {
    id: 1011334,
    name: 'Spider-Man',
    description: 'Bitten by a radioactive spider, Peter Parker’s arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles.',
    thumbnail: {
        path: 'https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fspider-man.png?alt=media&token=8ff4b083-81ed-449f-823c-c79110735d1b'
    },
    humanName: 'Peter Parker',
    isLike: false,
};

export const CharacterCard = () => {
    return (
        <div className={s.root}>
            <img
                className={s.cardImage}
                src={CHARACTER.thumbnail.path}
                alt={CHARACTER.name}
            />
            <div className={s.cardDetails}>
                <Heading
                    className={s.cardName}
                    level={2}
                >
                    {CHARACTER.name}
                </Heading>
                <Heading
                    className={s.cardHumanName}
                    level={3}
                >
                    {CHARACTER.humanName}
                </Heading>
                <Text className={s.cardDescription}>
                    {CHARACTER.description}
                </Text>
                <div className={s.cardMeta}>
                    <div className={s.like}>
                        <HeartLogo />
                    </div>
                    <div className={s.readBio}>
                        <a href="#">Read bio</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
