import React, {useEffect, useState} from 'react';
import {Navbar, Nav, Container, Form} from 'react-bootstrap';
import i18n from '@/i18n';
import {useTranslation} from 'react-i18next';
import './Navigation.scss'

interface INavigationProps {
    activePage: string
}

const Navigation: React.FunctionComponent<INavigationProps> = ({activePage}) => {
    const [background, setBackground] = useState('black');

    const {t} = useTranslation();

    useEffect(() => {
        switch (activePage) {
            case 'home':
                setBackground('black');
                break;
            case 'profile':
                setBackground('black');
                break;
            case 'achievement':
                setBackground('blue');
                break;
            case 'experience':
                setBackground('black');
                break;
            case 'interest':
                setBackground('black');
                break;
            case 'future':
                setBackground('blue');
                break;
            default:
                setBackground('black');
                break;
        }
    }, [activePage]);

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(event.target.value)
        console.log(event.target.value)
    };

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className={`resume ${background}`}>
            <Container>
                <Navbar.Brand href="#home" data-menuanchor="home">
                    Yosheng Zhang
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav id="menu">
                        <Nav.Link href="#profile" data-menuanchor="profile" className="active">
                            {t('profile')}
                        </Nav.Link>
                        <Nav.Link href="#achievement" data-menuanchor="achievement">
                            {t('achievement')}
                        </Nav.Link>
                        <Nav.Link href="#experience" data-menuanchor="experience">
                            {t('experience')}
                        </Nav.Link>
                        <Nav.Link href="#interest" data-menuanchor="interest">
                            {t('interest')}
                        </Nav.Link>
                        <Nav.Link href="#future" data-menuanchor="future">
                            {t('future')}
                        </Nav.Link>
                        <Form className="d-flex">
                            <Form.Select className="language-selector" aria-label="语言选择"
                                         onChange={handleLanguageChange} defaultValue={i18n.language}>
                                <option value="en">English</option>
                                <option value="zh-CN">简体</option>
                                <option value="zh-TW">繁體</option>
                            </Form.Select>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;