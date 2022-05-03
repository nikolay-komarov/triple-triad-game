import React from 'react';
import {useParams} from 'react-router-dom';
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

export const Biography = () => {
    const {id} = useParams();
    const getContent = () => {
        const bioById = BIO[id];

        if (!bioById) return <Text>nothing here...</Text>;

        return bioById.map((item, idx) => <React.Fragment key={idx}>{getElement(item)}</React.Fragment>)
    };

    return (
        <div className={s.root}>
            <Container className={s.contentWrapper}>
                {getContent()}
            </Container>
        </div>
    );
};
