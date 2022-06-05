import React from 'react';
import {useNavigate, useParams, Navigate} from 'react-router-dom';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import Button from '../../components/Button';
import {AnchorLink} from './components/AnchorLink';
import s from './Biography.module.scss';

import {BIO} from '../../mocks/bio';

const getElement = (el) => {
    switch (el.type) {
        case 'h1': return (<Heading mt={3} mb={4} level={1}>{el.text}</Heading>);
        case 'h2': return (
            <Heading mt={1} mb={2} level={2}>
                <div className={s.anchorLinkWrapper}>
                    {el.text}
                    <AnchorLink headerTitle={el.text} />
                </div>
            </Heading>);
        case 'h3': return (<Heading mt={1} mb={2} level={3}>{el.text}</Heading>);
        case 'h4': return (<Heading mt={1} mb={2} level={4}>{el.text}</Heading>);
        case 'h5': return (<Heading mt={1} mb={2} level={5}>{el.text}</Heading>);
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
