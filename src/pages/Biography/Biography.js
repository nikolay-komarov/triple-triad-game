import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import {BIO} from '../../mocks/bio';
import s from './Biography.module.scss';

const getElement = (el) => {
    switch (el.type) {
        case ('h1' || 'h2' || 'h3' || 'h4' || 'h5'): return (<Heading level={Number(el.type.charAt(1))}>{el.text}</Heading>);
        case 'paragraph': return (<Text>{el.text}</Text>);
        case 'img': return (<div className={s.imgWrapper}><img src={el.src} alt="hero pic"/></div>);
        default: return null;
    }
};

export const Biography = ({id, onBackClick}) => {
    const getContent = () => {
        const bioById = BIO[id];

        if (!bioById) return <Text>nothing here...</Text>;

        return bioById.map((item, idx) => <React.Fragment key={idx}>{getElement(item)}</React.Fragment>)
    };

    const handleBackClick = () => onBackClick(null);

    return (
        <div className={s.root}>
            <div className={s.buttonWrapper}>
                <Button variant="white" onClick={handleBackClick}>Go back</Button>
            </div>
            <Container className={s.contentWrapper}>
                {getContent()}
            </Container>
        </div>
    );
};

Biography.propTypes = {
    id: PropTypes.number.isRequired,
    onBackClick: PropTypes.func,
};
