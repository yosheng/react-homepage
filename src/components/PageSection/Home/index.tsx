import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faGithub, faLinkedin, faSlideshare, faWordpress} from '@fortawesome/free-brands-svg-icons';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import './style.scss';

const Home: React.FC = () => {
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
            <Col xs={12} className="d-none d-sm-block resume-name-big">張又升</Col>
            <Col xs={12} className="d-sm-none resume-name">張又升</Col>
            <Col
                xs={12}
                className="motto resume-hide hinge-sty"
                style={{ position: 'relative' }}
            >
                Yosheng
            </Col>
            <Col xs={12} style={{ fontSize: '0.3em' }}>1993年 牡羊男</Col>
            <Col xs={12} className="social-links">
                <a href="https://blog.yosheng.tw">
                    <FontAwesomeIcon icon={faWordpress} fixedWidth />
                </a>
                <a href="https://www.linkedin.com/in/yosheng-zhang-020962102">
                    <FontAwesomeIcon icon={faLinkedin} fixedWidth />
                </a>
                <a href="https://github.com/yosheng">
                    <FontAwesomeIcon icon={faGithub} fixedWidth />
                </a>
                <a href="https://www.facebook.com/yosheng0323">
                    <FontAwesomeIcon icon={faFacebook} fixedWidth />
                </a>
                <a href="https://www.slideshare.net/ssuserf01a96">
                    <FontAwesomeIcon icon={faSlideshare} fixedWidth />
                </a>
            </Col>
            <button className="next-page">
                <FontAwesomeIcon icon={faChevronDown} fixedWidth />
            </button>
        </Container>
    );
};

export default Home;