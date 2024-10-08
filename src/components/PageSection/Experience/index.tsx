import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './style.scss'

import asusImg from '@/assets/images/experience/02-asus.jpg';
import sceImg from '@/assets/images/experience/03-sce.jpg';
import sweetomeImg from '@/assets/images/experience/04-sweetome.jpg';
import futongImg from '@/assets/images/experience/05-futong.png';
import flexemImg from '@/assets/images/experience/06-flexem.png';
import synyiImg from '@/assets/images/experience/07-synyi.png';
import {useTranslation} from "react-i18next";

const Experience = () => {

    const {t} = useTranslation();

    const experiences = [
        {
            imgSrc: asusImg,
            name: t('experience.work.asus.name'),
            role: t('experience.work.asus.role'),
            description: t('experience.work.asus.description')
        },
        {
            imgSrc: sceImg,
            name: t('experience.work.sce.name'),
            role: t('experience.work.sce.role'),
            description: t('experience.work.sce.description')
        },
        {
            imgSrc: sweetomeImg,
            name: t('experience.work.sweetome.name'),
            role: t('experience.work.sweetome.role'),
            description: t('experience.work.sweetome.description')
        },
        {
            imgSrc: futongImg,
            name: t('experience.work.futong.name'),
            role: t('experience.work.futong.role'),
            description: t('experience.work.futong.description')
        },
        {
            imgSrc: flexemImg,
            name: t('experience.work.flexem.name'),
            role: t('experience.work.flexem.role'),
            description: t('experience.work.flexem.description')
        },
        {
            imgSrc: synyiImg,
            name: t('experience.work.synyi.name'),
            role: t('experience.work.synyi.role'),
            description: t('experience.work.synyi.description')
        }
    ];

    return (
        <Container>
            <Row className="d-none d-md-block">
                <Col xs={12}>
                    <div>
                        <p>{t('experience.sign1')}</p>
                    </div>
                    <div>
                        <p>{t('experience.sign2')}</p>
                    </div>
                </Col>
            </Row>
            <Row>
                {experiences.map((exp, index) => (
                    <Col xs={6} md={4} key={index}>
                        <div className="thumbnail">
                            <img
                                src={exp.imgSrc}
                                className="rounded-circle team-img"
                                alt={exp.name}
                            />
                            <div className="caption">
                                <h3>{exp.name}</h3>
                                <p>{exp.role}</p>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Experience;