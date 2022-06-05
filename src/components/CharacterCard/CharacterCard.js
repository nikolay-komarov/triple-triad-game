import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
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
    isLike,
    onLikeClick,
}) => {
    const handleLikeClick = () => onLikeClick && onLikeClick(id);

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
                    <div className={cn(s.like, {[s.active]: isLike})} onClick={handleLikeClick}>
                        <HeartLogo />
                    </div>
                    <div className={s.readBio}>
                        <Link to={`/bio/${id}`}>Read bio</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

CharacterCard.defaultProps = {
    isLike: false,
}

CharacterCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    src: PropTypes.string,
    description: PropTypes.string,
    humanName: PropTypes.string,
    isLike: PropTypes.bool,
    onLikeClick: PropTypes.func,
};
