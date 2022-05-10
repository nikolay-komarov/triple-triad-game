import React from 'react';
import {useNavigate, useParams, Navigate} from 'react-router-dom';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import Button from '../../components/Button';
import s from './Biography.module.scss';

import {BIO} from '../../mocks/bio';

const getElement = (el) => {
    switch (el.type) {
        case ('h1' || 'h2' || 'h3' || 'h4' || 'h5'): return (<Heading mt={3} mb={4} level={Number(el.type.charAt(1))}>{el.text}</Heading>);
        case 'paragraph': return (<Text mb={2}>{el.text}</Text>);
        case 'img': return (<div className={s.imgWrapper}><img src={el.src} alt="hero pic"/></div>);
        default: return null;
    }
};

export const Biography = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const getContent = () => {
        const bioById = BIO[id];

        if (!bioById) return <Navigate to="/characters" replace />;

        return bioById.map((item, idx) => <React.Fragment key={idx}>{getElement(item)}</React.Fragment>)
    };

    const handleGoBackClick = () => {
        navigate(-1);
    };

    return (
        <div className={s.root}>
            <Container className={s.contentWrapper}>
                <Button
                    variant="white"
                    onClick={handleGoBackClick}
                >
                    GoBack
                </Button>
                {getContent()}
            </Container>
        </div>
    );
};
