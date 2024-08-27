import React, {useState, FormEvent} from 'react';
import {Container, Form, Button, Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTelegram, faWeixin, faWordpress} from "@fortawesome/free-brands-svg-icons";
import './style.scss'

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

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
                    <h2>联系我</h2>
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
                <Col md={6} xs={12}>
                    <div className="contact-info">
                        <div className="contact-text">如果你有任何问题欢迎添加我好友或者发送邮件跟我联络！</div>
                        <div className="contact-icons">
                            <a href="https://blog.yosheng.tw">
                                <FontAwesomeIcon icon={faTelegram} size="4x" fixedWidth />
                            </a>
                            <a href="https://blog.yosheng.tw">
                                <FontAwesomeIcon icon={faWeixin} size="4x" fixedWidth />
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;