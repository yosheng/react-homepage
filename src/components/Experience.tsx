import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Experience.scss'

// 引入图片
import shuImg from '@/assets/images/page-4/01-shu.jpg';
import asusImg from '@/assets/images/page-4/02-asus.jpg';
import sceImg from '@/assets/images/page-4/03-sce.jpg';
import sweetomeImg from '@/assets/images/page-4/04-sweetome.jpg';

const Experience = () => {
    return (
        <Container fluid>
            <Row className="d-none d-md-block">
                <Col xs={12}>
                    <span className="title" style={{ display: 'inline-block' }}>工作經歷</span>
                </Col>
            </Row>
            <Row className="d-none d-md-block">
                <Col xs={12}>
                    <span className="sign" style={{ fontSize: '20px' }}>衷於學習 樂於分享</span>
                </Col>
            </Row>
            <Row>
                <Col xs={6} md={3}>
                    <div className="thumbnail">
                        <img
                            src={shuImg}
                            className="rounded-circle team-img"
                            alt="世新大學"
                        />
                        <div className="caption">
                            <h3>世新大學</h3>
                            <p>維修工讀生</p>
                            <p>基本軟硬體維修和Linux工作站服務架設與管理</p>
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={3}>
                    <div className="thumbnail">
                        <img
                            src={asusImg}
                            className="rounded-circle team-img"
                            alt="華碩"
                        />
                        <div className="caption">
                            <h3>華碩</h3>
                            <p>校園實習生</p>
                            <p>市場的行銷學和產品檢測流程管理</p>
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={3}>
                    <div className="thumbnail">
                        <img
                            src={sceImg}
                            className="rounded-circle team-img"
                            alt="文化大學"
                        />
                        <div className="caption">
                            <h3>文化大學</h3>
                            <p>程式設計師</p>
                            <p>後端程式開發和系統規劃與建置</p>
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={3}>
                    <div className="thumbnail">
                        <img
                            src={sweetomeImg}
                            className="rounded-circle team-img"
                            alt="斯维登"
                        />
                        <div className="caption">
                            <h3>斯维登</h3>
                            <p>软件开发工程师</p>
                            <p>全栈开发和系统维护</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Experience;