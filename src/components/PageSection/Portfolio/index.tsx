import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Swiper, SwiperSlide} from 'swiper/react';
import Carousel, {CarouselProps} from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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

    const data = [
        {
            title: '建置網路儲存裝置',
            img: buildNasImg,
        },
        {
            title: '整合維護工具碟',
            img: grub4dosImg,
        },
    ];

    const carouselOptions: CarouselProps = {
        additionalTransfrom: 0,
        arrows: true,
        autoPlaySpeed: 3000,
        centerMode: false,
        dotListClass: "",
        draggable: true,
        infinite: false,
        keyBoardControl: true,
        minimumTouchDrag: 80,
        renderButtonGroupOutside: false,
        renderDotsOutside: false,
        responsive: {
            superLargeDesktop: {
                breakpoint: {max: 4000, min: 3000},
                items: 1
            },
            desktop: {
                breakpoint: {max: 3000, min: 1024},
                items: 1
            },
            tablet: {
                breakpoint: {max: 1024, min: 464},
                items: 1
            },
            mobile: {
                breakpoint: {max: 464, min: 0},
                items: 1
            }
        },
        showDots: true,
        sliderClass: "",
        slidesToSlide: 1,
        swipeable: true,
        children: undefined
    };

    return (
        <Container>
            <Carousel {...carouselOptions}>
                {data.map((slide, index) => (
                    <div key={index} className="carousel-item-wrapper">
                        <img src={slide.img} alt={slide.title}/>
                        <div className="carousel-item-title">{slide.title}</div>
                    </div>
                ))}
            </Carousel>
        </Container>
    );
};

export default Portfolio;