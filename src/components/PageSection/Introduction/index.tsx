import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import './style.scss';
import 'swiper/scss/pagination';

import codingImg from '@/assets/images/introduction/coding.png';
import repairImg from '@/assets/images/introduction/repair.png';
import profileImg from '@/assets/images/introduction/profle.png';
import RHCSAImg from '@/assets/images/introduction/RHCSA.jpg';
import RHCEImg from '@/assets/images/introduction/RHCE.jpg';
import OCJP6Img from '@/assets/images/introduction/OCJP6.jpg';
import Certificate1Img from '@/assets/images/introduction/Certificate_1.jpg';
import Certificate2Img from '@/assets/images/introduction/Certificate_2.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSchool} from '@fortawesome/free-solid-svg-icons';
import {Autoplay, Pagination} from 'swiper/modules';
import {useTranslation} from "react-i18next";

const swiperSlides = [
    {title: 'RHCSA', img: RHCSAImg},
    {title: 'RHCE', img: RHCEImg},
    {title: 'OCJP 6', img: OCJP6Img},
    {title: 'HTML5', img: Certificate1Img},
    {title: 'HTML5', img: Certificate2Img},
];

const swiperOption = {
    modules: [Pagination, Autoplay],
    spaceBetween: 16,
    slidesPerView: 1.15,
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        clickable: true,
    },
};

const Introduction: React.FC = () => {
    const {t} = useTranslation();

    return (
        <Container>
            <Row>
                <Col md={6} xs={12}>
                    <div className="introduction-paragraph">
                        <div className="media">
                            <div className="introduction-title">
                                <div className="introduction-icon">
                                    <img src={codingImg} alt={t('introduction.technology')}/>
                                </div>
                                <div className="introduction-heading">{t('introduction.technology')}</div>
                            </div>
                            <div className="introduction-content">
                                {t('introduction.devops')}
                            </div>
                        </div>
                        <div className="media">
                            <div className="introduction-title">
                                <div className="introduction-icon">
                                    <img src={repairImg} alt={t('introduction.devices')}/>
                                </div>
                                <div className="introduction-heading">{t('introduction.devices')}</div>
                            </div>
                            <div className="introduction-content">
                                {t('introduction.systems')}
                            </div>
                        </div>
                        <div className="media">
                            <div className="introduction-title">
                                <div className="introduction-icon">
                                    <img src={profileImg} alt={t('introduction.travel')}/>
                                </div>
                                <div className="introduction-heading">{t('introduction.travel')}</div>
                            </div>
                            <div className="introduction-content">
                                {t('introduction.travel_content')}
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6} className="d-none d-sm-block">
                    <div>
                        <div className="introduction-title">
                            <div className="introduction-icon">
                                <img src={profileImg} alt={t('introduction.others')}/>
                            </div>
                            <div className="introduction-heading">{t('introduction.education')}</div>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <a href="https://who.shu.edu.tw/yosheng0323" style={{marginRight: 10}}>
                                <FontAwesomeIcon style={{height: 60, width: 60, color: '#0d6efd'}} icon={faSchool}
                                                 fixedWidth/>
                            </a>
                            <div>
                                <div>{t('introduction.university')}</div>
                                <div>{t('introduction.exchange_student')}</div>
                            </div>
                        </div>
                    </div>
                    <Swiper {...swiperOption}>
                        {swiperSlides.map((slide, index) => (
                            <SwiperSlide key={index} className="license-slide">
                                <img src={slide.img} alt={slide.title}/>
                                <span className="tip">{t(`introduction.${slide.title}`)}</span>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Col>
                <Col md={12} className="d-none d-sm-block">
                    <div className="subject-group">
                        <span className="subject-1">{t('introduction.programmer')}</span>
                        <span className="subject-2">{t('introduction.adventurer')}</span>
                        <span className="subject-3">{t('introduction.hikikomori')}</span>
                        <span className="subject-4">{t('introduction.tech_enthusiast')}</span>
                        <span className="subject-5">{t('introduction.food_critic')}</span>
                        <span className="subject-6">{t('introduction.socialite')}</span>
                        <span className="subject-7">{t('introduction.photographer')}</span>
                        <span className="subject-8">{t('introduction.naruto_fan')}</span>
                        <span className="subject-9">{t('introduction.one_piece_fan')}</span>
                        <span className="subject-10">{t('introduction.tarot_reader')}</span>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Introduction;