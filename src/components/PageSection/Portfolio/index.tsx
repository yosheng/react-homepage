import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './style.scss';

// 引入图片
import blogImg from '@/assets/images/page-5/01-blog.jpg';
import portfolioImg from '@/assets/images/page-5/02-portfolio.png';
import storeManagementImg from '@/assets/images/page-5/03-Store Management.png';
import gaeImg from '@/assets/images/page-5/04-Google App Engine.jpg';
import memberManagementImg from '@/assets/images/page-5/05-Member Management.png';
import webSpiderImg from '@/assets/images/page-5/06-Web spider.jpg';
import baseballConnectionImg from '@/assets/images/page-5/07-baseball connection.jpg';
import fightConnectionImg from '@/assets/images/page-5/08-fight connection.jpg';
import buildNasImg from '@/assets/images/page-5/01-build nas.jpg';
import grub4dosImg from '@/assets/images/page-5/02-grub4dos.jpg';

const Portfolio = () => {
    const swiperOption = {
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            clickable: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    };

    const swiperSlides = [
        {
            title: '建置網路儲存裝置',
            img: buildNasImg,
        },
        {
            title: '整合維護工具碟',
            img: grub4dosImg,
        },
    ];

    return (
        <>
            {/* 第一屏 */}
            <div className="slide">
                <Container>
                    <Row>
                        <Col xs={6} md={3}>
                            <div className="portfolio-item">
                                <div className="hover-bg">
                                    <div className="hover-text">
                                        <h4>
                                            <a href="https://blog.yosheng.tw" target="_blank" rel="noopener noreferrer" title="個人部落格">
                                                個人部落格
                                            </a>
                                        </h4>
                                        <small>使用 Wordpress 架設自己的部落格</small>
                                        <i className="fa fa-search"></i>
                                    </div>
                                    <img src={blogImg} className="img-fluid" alt="個人部落格" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={3}>
                            <div className="portfolio-item">
                                <div className="hover-bg">
                                    <div className="hover-text">
                                        <h4>
                                            <a href="https://portfolio.yosheng.tw" target="_blank" rel="noopener noreferrer" title="個人回憶錄">
                                                個人回憶錄
                                            </a>
                                        </h4>
                                        <small>使用 HTML5+CSS+JQuery 建置網站並學習 Yeoman 構造工具</small>
                                        <i className="fa fa-search"></i>
                                    </div>
                                    <img src={portfolioImg} className="img-fluid" alt="個人回憶錄" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={3}>
                            <div className="portfolio-item">
                                <div className="hover-bg">
                                    <div className="hover-text">
                                        <h4>
                                            <a href="https://github.com/yosheng/Store-Management" target="_blank" rel="noopener noreferrer" title="商品管理系統">
                                                商品管理系統
                                            </a>
                                        </h4>
                                        <small>使用 Bootstrap+PHP 建置不同商家會動態產生資料庫</small>
                                        <i className="fa fa-search"></i>
                                    </div>
                                    <img src={storeManagementImg} className="img-fluid" alt="商品管理系統" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={3}>
                            <div className="portfolio-item">
                                <div className="hover-bg">
                                    <div className="hover-text">
                                        <h4>
                                            <a href="http://shuaugur.appspot.com/login.jsp" target="_blank" rel="noopener noreferrer" title="Google App Engine">
                                                Google App Engine
                                            </a>
                                        </h4>
                                        <small>使用 JSP+Java 並透過GAE進行部署</small>
                                        <i className="fa fa-search"></i>
                                    </div>
                                    <img src={gaeImg} className="img-fluid" alt="Google App Engine" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={3}>
                            <div className="portfolio-item">
                                <div className="hover-bg">
                                    <div className="hover-text">
                                        <h4>會員管理介面</h4>
                                        <small>使用 ASP.NET 學習簡單CRUD操作</small>
                                    </div>
                                    <img src={memberManagementImg} className="img-fluid" alt="會員管理介面" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={3}>
                            <div className="portfolio-item">
                                <div className="hover-bg">
                                    <div className="hover-text">
                                        <h4>網路爬蟲</h4>
                                        <small>使用C# 分析html tag並將其下載至資料庫</small>
                                    </div>
                                    <img src={webSpiderImg} className="img-fluid" alt="網路爬蟲" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={3}>
                            <div className="portfolio-item">
                                <div className="hover-bg">
                                    <div className="hover-text">
                                        <h4>棒球九宮格連線遊戲</h4>
                                        <small>使用 C# 學習 socket 連線</small>
                                    </div>
                                    <img src={baseballConnectionImg} className="img-fluid" alt="棒球九宮格連線遊戲" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={3}>
                            <div className="portfolio-item">
                                <div className="hover-bg">
                                    <div className="hover-text">
                                        <h4>小惡魔對戰連線遊戲</h4>
                                        <small>使用 VB 學習 socket 連線</small>
                                    </div>
                                    <img src={fightConnectionImg} className="img-fluid" alt="小惡魔對戰連線遊戲" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* 第二屏 */}
            <div className="slide">
                <Container>
                    <Row>
                        <Swiper {...swiperOption} className="portfolio-container">
                            {swiperSlides.map((slide, index) => (
                                <SwiperSlide key={index} className="portfolio-slide">
                                    <span className="tip">{slide.title}</span>
                                    <img src={slide.img} alt={slide.title} />
                                </SwiperSlide>
                            ))}
                            <div className="swiper-pagination"></div>
                        </Swiper>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Portfolio;