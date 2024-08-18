import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Achievement.scss'

// 引入图片
import codingImg from '@/assets/images/page-3/coding.png';
import repairImg from '@/assets/images/page-3/repair.png';
import profileImg from '@/assets/images/page-3/profle.png';
import RHCSAImg from '@/assets/images/page-3/RHCSA.jpg';
import RHCEImg from '@/assets/images/page-3/RHCE.jpg';
import OCJP6Img from '@/assets/images/page-3/OCJP6.jpg';
import Certificate1Img from '@/assets/images/page-3/Certificate_1.jpg';
import Certificate2Img from '@/assets/images/page-3/Certificate_2.jpg';

// swiperSlides 数据
const swiperSlides = [
    { title: 'RHCSA', img: RHCSAImg },
    { title: 'RHCE', img: RHCEImg },
    { title: 'OCJP 6', img: OCJP6Img },
    { title: 'HTML5', img: Certificate1Img },
    { title: 'HTML5', img: Certificate2Img },
];

const swiperOption = {
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        clickable: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
};

const Achievement = () => {
    return (
        <Container>
            <Row>
                <Col md={6} xs={12}>
                    <div className="skill-introduce">
                        <div className="media">
                            <div className="media-left media-top">
                                <a href="#">
                                    <img className="media-object" src={codingImg} alt="Coding" />
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">程式設計</h4>
                                <p>
                                    廣泛學習各種程式語言，從基礎 C 語言到物件導向的 C# 或 Java
                                    <br />
                                    具有使用 PHP 或者是 ASP.NET 搭配資料庫開發基本系統能力
                                    <br />
                                    喜好學習各種工具來快速完成目的，具有學習熱誠
                                    <br />
                                    對於前端的 HTML5、CSS3、JavaScript 皆有著墨
                                </p>
                            </div>
                        </div>
                        <div className="media">
                            <div className="media-left media-top">
                                <a href="#">
                                    <img className="media-object" src={repairImg} alt="System Maintenance" />
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">系統維護</h4>
                                <p>
                                    學習透過Gurb4dos整合維修工具組 <br />
                                    隨著UEFI興起學習使用 rEFInd 整合工具 <br />
                                    架設Nas開源相關系統如 Nas4Free、FreeNas、Openmediavault <br />
                                    考取 Linux 系統維護相關證照並學習使用 Docker
                                </p>
                            </div>
                        </div>
                        <div className="media">
                            <div className="media-left media-top">
                                <a href="#">
                                    <img className="media-object" src={profileImg} alt="Others" />
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">其他</h4>
                                <p>
                                    善於溝通解決衝突，學習塔羅占卜協助周遭朋友解惑 <br />
                                    透過 markdown 語法紀錄占卜筆記並使用 gitbook 發布
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6} className="d-none d-sm-block">
                    <Swiper {...swiperOption} className="license-container">
                        {swiperSlides.map((slide, index) => (
                            <SwiperSlide key={index} className="license-slide">
                                <span className="tip">{slide.title}</span>
                                <img src={slide.img} alt={slide.title} />
                            </SwiperSlide>
                        ))}
                        <div className="swiper-pagination" />
                    </Swiper>
                </Col>
                <Col md={12} className="d-none d-sm-block skills">
                    <span className="subject-9">Linux</span>
                    <span className="subject-2">Bootstrap</span>
                    <span className="subject-3">塔羅占卜</span>
                    <span className="subject-4">jQuery</span>
                    <span className="subject-10">C#</span>
                    <span className="subject-5">程式設計</span>
                    <span className="subject-6">CSS3</span>
                    <span className="subject-7">系統維護</span>
                    <span className="subject-8">Java</span>
                    <span className="subject-1">HTML5</span>
                </Col>
            </Row>
        </Container>
    );
};

export default Achievement;