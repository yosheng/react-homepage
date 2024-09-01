import React from 'react';
import {Container} from 'react-bootstrap';
import Carousel, {CarouselProps, DotProps} from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'swiper/css';
import './style.scss';

import aiPlatformImg from '@/assets/images/portfolio/aiPlatform.png';
import cardsCreationImg from '@/assets/images/portfolio/cardsCreation.png';
import collegePortfolioImg from '@/assets/images/portfolio/collegePortfolio.png';
import feideeParserImg from '@/assets/images/portfolio/feideeParser.png';
import homeJqImg from '@/assets/images/portfolio/homeJq.png';
import homeVueImg from '@/assets/images/portfolio/homeVue.png';
import suiHelperImg from '@/assets/images/portfolio/suiHelper.png';
import tarotNoteImg from '@/assets/images/portfolio/tarotNote.png';
import zybuyImg from '@/assets/images/portfolio/zybuy.png';


const CustomDot = ({ onClick, active }: DotProps) => {
    return (
        <button
            className={`custom-dot ${active ? "custom-dot--active" : ""}`}
            onClick={() => onClick?.()}
        />
    );
};

const Portfolio = () => {

    const data = [
        {
            title: 'FeideeParser',
            url: 'https://github.com/yosheng/FeideeParser',
            img: feideeParserImg,
        },
        {
            title: 'AI Platform',
            url: 'https://ai.yosheng.tw/',
            img: aiPlatformImg,
        },
        {
            title: 'Tarot Note',
            url: 'https://tarot-note.readthedocs.io/zh-cn/latest/',
            img: tarotNoteImg,
        },
        {
            title: 'ZyBuy',
            url: 'https://zybuy.yosheng.tw/',
            img: zybuyImg,
        },
        {
            title: 'SuiHelper',
            url: 'https://github.com/yosheng/SuiHelper/',
            img: suiHelperImg,
        },
        {
            title: 'CardsGameCreation',
            url: 'https://yosheng.github.io/cards-game-creation/',
            img: cardsCreationImg,
        },
        {
            title: 'Vue Homepage',
            url: 'https://home-vue.yosheng.tw',
            img: homeVueImg,
        },
        {
            title: 'JQuery Homepage',
            url: 'https://home-jq.yosheng.tw',
            img: homeJqImg,
        },
        {
            title: 'College Portfolio',
            url: 'https://portfolio.yosheng.tw/',
            img: collegePortfolioImg,
        },
    ];

    const carouselOptions: CarouselProps = {
        additionalTransfrom: 0,
        arrows: true,
        autoPlaySpeed: 3000,
        centerMode: false,
        showDots: true,
        renderDotsOutside: true,
        customDot: <CustomDot />,
        dotListClass: "custom-dot-list-style",
        draggable: true,
        infinite: false,
        keyBoardControl: true,
        minimumTouchDrag: 80,
        renderButtonGroupOutside: false,
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
                        <div className="carousel-item-content">
                            <a href={slide.url}>{slide.title}</a>
                        </div>
                    </div>
                ))}
            </Carousel>
        </Container>
    );
};

export default Portfolio;