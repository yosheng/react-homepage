import React, {FormEvent, useState} from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLine, faTelegram, faWeixin} from "@fortawesome/free-brands-svg-icons";
import './style.scss'
import {TagCloud, TagCloudOptions} from "@frank-mayer/react-tag-cloud";
import {useTranslation} from "react-i18next";

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const {t} = useTranslation();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const subject = encodeURIComponent(`Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        const mailtoLink = `mailto:yoshengzhang@qq.com?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;
    };

    return (
        <Container>
            <Row>
                <Col md={6} xs={12}>
                    <div className="contact-info">
                        <span className="contact-sign">{t('experience.sign')}</span>
                        <div className="contact-text">如果你也有相同兴趣欢迎添加我好友或者发送邮件给我！</div>
                        <TagCloud
                            options={(w: Window & typeof globalThis): TagCloudOptions => ({
                                radius: Math.min(300, w.innerWidth, w.innerHeight) / 2,
                                maxSpeed: "normal",
                                // useContainerInlineStyles: false,
                                // containerClass: "tag-container"
                            })}
                            onClick={(tag: string, ev: MouseEvent) => alert(tag)}
                            onClickOptions={{passive: true}}
                            className="tag-cloud"
                        >
                            {[
                                "AI",
                                "游戏",
                                "塔羅",
                                "动漫",
                                "摄影",
                                "操作系统",
                                "单元测试",
                                "性能优化",
                                "逆向分析",
                                "网路爬虫",
                                "设计模式",
                                "领域驱动设计",
                            ]}
                        </TagCloud>

                        <div className="contact-icons">
                            <a href="https://t.me/yosheng0323">
                                <FontAwesomeIcon icon={faTelegram} size="4x" fixedWidth/>
                            </a>
                            <a href="weixin://dl/addfriend?nickName=yosheng0323&source=homepage">
                                <FontAwesomeIcon icon={faWeixin} size="4x" fixedWidth/>
                            </a>
                            <a href="https://line.me/ti/p/m2sp97wGKo">
                                <FontAwesomeIcon icon={faLine} size="4x" fixedWidth/>
                            </a>
                        </div>
                    </div>
                </Col>
                <Col md={6} xs={12} className="d-none d-sm-block">
                    <h2>写信给我</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>姓名</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="请输入您的姓名"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>电子邮箱</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="请输入您的电子邮箱"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>内容</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                placeholder="请输入您的消息"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            发送
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;