import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as HeartLogo} from './assets/heart.svg';
import Heading from '../Heading';
import Text from '../Text';
import cn from 'classnames';
import s from './CharacterCard.module.scss';

// todo: add s.readBio

export const CharacterCard = ({
    id,
    name,
    src,
    description,
    humanName,
}) => {
    const [like, setLike] = useState(false);
    const handleLikeClick = () => setLike(prev => !prev);

    return (
        <div className={s.root}>
            <img
                className={s.cardImage}
                src={src}
                alt={name}
            />
            <div className={s.cardDetails}>
                <Heading
                    className={s.cardName}
                    level={2}
                >
                    {name}
                </Heading>
                <Heading
                    className={s.cardHumanName}
                    level={3}
                >
                    {humanName}
                </Heading>
                <Text className={s.cardDescription}>
                    {description}
                </Text>
                <div className={s.cardMeta}>
                    <div className={cn(s.like, {[s.active]: like})} onClick={handleLikeClick}>
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

CharacterCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    src: PropTypes.string,
    description: PropTypes.string,
    humanName: PropTypes.string,
};
