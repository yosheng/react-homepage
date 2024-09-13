import React, {FormEvent, useState} from 'react';
import {Button, Col, Container, Form, Row, OverlayTrigger, Tooltip} from 'react-bootstrap';
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

        const subject = encodeURIComponent(`${t('contact.emailSubject', {name})}`);
        const body = encodeURIComponent(`${t('contact.emailBody', {name, email, message})}`);
        const mailtoLink = `mailto:yoshengzhang@qq.com?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;
    };

    return (
        <Container>
            <Row>
                <Col md={6} xs={12}>
                    <div className="contact-info">
                        <span className="contact-sign">{t('contact.sign')}</span>
                        <div className="contact-text">{t('contact.welcomeMessage')}</div>
                        <TagCloud
                            options={(w: Window & typeof globalThis): TagCloudOptions => ({
                                radius: Math.min(300, w.innerWidth, w.innerHeight) / 2,
                                maxSpeed: "normal",
                            })}
                            onClick={(tag: string, ev: MouseEvent) => alert(tag)}
                            onClickOptions={{passive: true}}
                            className="tag-cloud"
                        >
                            {t('contact.tags', { returnObjects: true }) as []}
                        </TagCloud>

                        <div className="contact-icons">
                            <a href="https://t.me/yosheng0323">
                                <FontAwesomeIcon icon={faTelegram} size="4x" fixedWidth/>
                            </a>
                            <OverlayTrigger
                                placement="bottom"
                                overlay={<Tooltip id="wechat-tooltip">{t('contact.wechat.info')}</Tooltip>}
                            >
                                {({ ref, ...triggerHandler }) => (
                                    <a
                                        href="weixin://dl/addfriend?nickName=yosheng0323&source=homepage"
                                        ref={ref}
                                        {...triggerHandler}
                                        style={{ color: 'inherit', textDecoration: 'none' }}
                                    >
                                        <FontAwesomeIcon style={{color: "white"}} icon={faWeixin} size="4x" fixedWidth />
                                    </a>
                                )}
                            </OverlayTrigger>
                            <a href="https://line.me/ti/p/m2sp97wGKo">
                                <FontAwesomeIcon icon={faLine} size="4x" fixedWidth/>
                            </a>
                        </div>
                    </div>
                </Col>
                <Col md={6} xs={12} className="d-none d-sm-block">
                    <h2>{t('contact.form.title')}</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>{t('contact.form.name')}</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={t('contact.form.namePlaceholder')}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>{t('contact.form.email')}</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder={t('contact.form.emailPlaceholder')}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>{t('contact.form.message')}</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                placeholder={t('contact.form.messagePlaceholder')}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            {t('contact.form.submit')}
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;