import React, {useEffect, useState} from 'react';
import {Navbar, Nav, Container, Form} from 'react-bootstrap';
import i18n from '@/utils/i18n';
import {useTranslation} from 'react-i18next';
import './Navigation.scss'
import {PageConstants} from "@/utils/constants";

interface INavigationProps {
    activePage: string
}

const Navigation: React.FunctionComponent<INavigationProps> = ({activePage}) => {
    const [background, setBackground] = useState('black');

    const {t} = useTranslation();

    const navigationLinks = [
        { id: PageConstants.Profile, text: t('navigation.profile'), active: true },
        { id: PageConstants.Introduction, text: t('navigation.introduction') },
        { id: PageConstants.Experience, text: t('navigation.experience') },
        { id: PageConstants.Portfolio, text: t('navigation.portfolio') },
        { id: PageConstants.Future, text: t('navigation.future') },
        { id: PageConstants.Skill, text: t('navigation.skill') },
        { id: PageConstants.Contact, text: t('navigation.contact') },
    ];

    useEffect(() => {
        switch (activePage) {
            case PageConstants.Home:
                setBackground('black');
                break;
            case PageConstants.Profile:
                setBackground('black');
                break;
            case PageConstants.Introduction:
                setBackground('blue');
                break;
            case PageConstants.Experience:
                setBackground('black');
                break;
            case PageConstants.Portfolio:
                setBackground('black');
                break;
            case PageConstants.Future:
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
                <Navbar.Brand href={`#${PageConstants.Home}`} data-menuanchor={PageConstants.Home}>
                    Yosheng Zhang
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav id="menu">
                        {navigationLinks.map((link, index) => (
                            <Nav.Link
                                key={index}
                                href={`#${link.id}`}
                                data-menuanchor={link.id}
                                className={link.active ? 'active' : undefined}
                            >
                                {link.text}
                            </Nav.Link>
                        ))}
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