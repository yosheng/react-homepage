import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faGithub, faLinkedin, faSlideshare, faWordpress} from '@fortawesome/free-brands-svg-icons';
import {faCakeCandles, faChevronDown, faLocationDot, faMapLocation} from '@fortawesome/free-solid-svg-icons';
import './style.scss';
import {useTranslation} from 'react-i18next';

const Home: React.FC = () => {

    const {t} = useTranslation();

    const introData = [
        {icon: faLocationDot, label: t('home.residence'), value: t('home.residence.value')},
        {icon: faMapLocation, label: t('home.from'), value: t('home.from.value')},
        {icon: faCakeCandles, label: t('home.birth'), value: t('home.birth.value')},
    ];

    return (
        <Container className="word">
            <Row className="userPic">
                <div
                    className="sec1_userPic"
                    style={{
                        transitionTimingFunction: 'cubic-bezier(0.6, 0.37, 0.23, 0.94)',
                        top: '0px',
                        borderRadius: '100px',
                    }}
                ></div>
            </Row>
            <Col xs={12} className="d-none d-sm-block resume-name-big">{t('home.name')}</Col>
            <Col xs={12} className="d-sm-none resume-name">{t('home.name')}</Col>
            <Col
                xs={12}
                className="motto resume-hide hinge-sty"
                style={{position: 'relative'}}
            >
                Yosheng
            </Col>
            <Col xs={12} className="social-links">
                <a href="https://blog.yosheng.tw">
                    <FontAwesomeIcon icon={faWordpress} fixedWidth/>
                </a>
                <a href="https://www.linkedin.com/in/yosheng-zhang-020962102">
                    <FontAwesomeIcon icon={faLinkedin} fixedWidth/>
                </a>
                <a href="https://github.com/yosheng">
                    <FontAwesomeIcon icon={faGithub} fixedWidth/>
                </a>
                <a href="https://www.facebook.com/yosheng0323">
                    <FontAwesomeIcon icon={faFacebook} fixedWidth/>
                </a>
                <a href="https://www.slideshare.net/ssuserf01a96">
                    <FontAwesomeIcon icon={faSlideshare} fixedWidth/>
                </a>
            </Col>
            <Col xs={12} className="intro-section">
                {introData.map((item, index) => (
                    <div key={index} className="intro-section-row">
                        <span><FontAwesomeIcon icon={item.icon} fixedWidth style={{marginRight: 5}}/>{item.label}</span>
                        <span>{item.value}</span>
                    </div>
                ))}
            </Col>
            <button className="next-page">
                <FontAwesomeIcon icon={faChevronDown} fixedWidth/>
            </button>
        </Container>
    );
};

export default Home;