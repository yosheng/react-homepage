import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Profile.scss'

import laptopImg from '@/assets/images/page-2/laptop.png';
import capImg from '@/assets/images/page-2/cap.png';
import scrollImg from '@/assets/images/page-2/scroll.png';
import mailImg from '@/assets/images/page-2/mail.png';

const Profile: React.FC = () => {
    return (
        <Container>
            <Row className="text-center">
                <Col xs={12}>
                    <h2 className="d-none d-md-block title">基本資料</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={6} sm={6} md={3} className="icon-infomation introduction">
                    <a href="https://blog.yosheng.tw">
                        <img src={laptopImg} alt="個人簡介" />
                    </a>
                    <h4>個人簡介</h4>
                    <p>1993年 牡羊男</p>
                </Col>
                <Col xs={6} sm={6} md={3} className="icon-infomation education">
                    <a href="https://who.shu.edu.tw/yosheng0323">
                        <img src={capImg} alt="教育背景" />
                    </a>
                    <h4>教育背景</h4>
                    <p>
                        世新大學 資管系 網科組
                        <br />
                        同濟大學 計算機科學 交換生
                    </p>
                </Col>
                <Col xs={6} sm={6} md={3} className="icon-infomation experience">
                    <a href="https://blog.yosheng.tw/about-author">
                        <img src={scrollImg} alt="校園經歷" />
                    </a>
                    <h4>校園經歷</h4>
                    <p>
                        占星社 副社長
                        <br />
                        學生議會 資管系議員
                    </p>
                </Col>
                <Col xs={6} sm={6} md={3} className="icon-infomation contact">
                    <a href="mailto:sad445566@gmail.com">
                        <img src={mailImg} alt="聯繫方式" />
                    </a>
                    <h4>聯繫方式</h4>
                    <p>yosheng0323@outlook.com</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;