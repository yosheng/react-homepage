import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import './style.scss'
import 'swiper/scss/pagination';

// 引入图片
import codingImg from '@/assets/images/page-3/coding.png';
import repairImg from '@/assets/images/page-3/repair.png';
import profileImg from '@/assets/images/page-3/profle.png';
import RHCSAImg from '@/assets/images/page-3/RHCSA.jpg';
import RHCEImg from '@/assets/images/page-3/RHCE.jpg';
import OCJP6Img from '@/assets/images/page-3/OCJP6.jpg';
import Certificate1Img from '@/assets/images/page-3/Certificate_1.jpg';
import Certificate2Img from '@/assets/images/page-3/Certificate_2.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSchool} from "@fortawesome/free-solid-svg-icons";
import {Pagination, Autoplay} from 'swiper/modules';

// swiperSlides 数据
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
        disableOnInteraction: false
    },
    pagination: {
        clickable: true,
    },
};

const Introduction = () => {
    return (
        <Container>
            <Row>
                <Col md={6} xs={12}>
                    <div className="skill-introduce">
                        <div className="media">
                            <div className="media-title">
                                <a href="#">
                                    <img className="media-object" src={codingImg} alt="Coding"/>
                                </a>
                                <div className="media-heading">技术与开发</div>
                            </div>
                            <div className="media-body">
                                我是一个 DevOps 狂热的开发者，拥有超过5年的后端开发经验和1年以上的前端开发经验，在全栈开发上有着扎实的技能。我熟悉配置
                                CI/CD 环境，利用 Docker 进行容器化部署，并在 Jenkins 上搭建自动化流程。此外，我还掌握写爬虫编程获取网站获取信息及通过
                                Android 逆向分析开发自动签到脚本。我善于沟通，能够深刻理解用户需求，并交付实际可靠的产品。
                            </div>
                        </div>
                        <div className="media">
                            <div className="media-title">
                                <a href="#">
                                    <img className="media-object" src={repairImg} alt="System Maintenance"/>
                                </a>
                                <div className="media-heading">设备与系统</div>
                            </div>
                            <div className="media-body">
                                我喜欢折腾各种设备和系统，从 Android 刷机到苹果设备越狱（Jailbreak），再到帮朋友修电脑，配置
                                Grub4dos 和 rEFInd 进行引导管理。我也会刷路由器的 OpenWrt
                                固件，并亲手搭建黑苹果（Hackintosh）电脑。在存储和虚拟化领域，我熟练配置 NAS 系统，如 Synology
                                DSM、Nas4Free、FreeNAS、OpenMediaVault，并能进行 ESXi 的虚拟化配置。
                            </div>
                        </div>
                        <div className="media">
                            <div className="media-title">
                                <a href="#">
                                    <img className="media-object" src={profileImg} alt="Others"/>
                                </a>
                                <div className="media-heading">旅游与摄影</div>
                            </div>
                            <div className="media-body">
                                除了技术方面的兴趣，我还热爱旅游和摄影。我曾经游历过日本的京都、大阪、奈良，进行过台湾的环岛旅行，还踏足过中国的上海、四川、安徽、浙江、云南、福建、湖北和江西。
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6} className="d-none d-sm-block">
                    <div>
                        <div className="introduction-paragraph">
                            <a href="#" className="introduction-icon">
                                <img className="media-object" src={profileImg} alt="Others"/>
                            </a>
                            <div className="introduction-heading">教育与证书</div>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <a href="https://who.shu.edu.tw/yosheng0323" style={{marginRight: 10}}>
                                <FontAwesomeIcon style={{height: 60, width: 60, color: "#0d6efd"}} icon={faSchool}
                                                 fixedWidth/>
                            </a>
                            <div>
                                <div>世新大學 資管系 網科組</div>
                                <div>同濟大學 計算機科學 交換生</div>
                            </div>
                        </div>
                    </div>
                    <Swiper {...swiperOption} className="license-container">
                        {swiperSlides.map((slide, index) => (
                            <SwiperSlide key={index} className="license-slide">
                                <img src={slide.img} alt={slide.title}/>
                                <span className="tip">{slide.title}</span>
                            </SwiperSlide>
                        ))}
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

export default Introduction;