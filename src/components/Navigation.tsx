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

    useEffect(() => {
        switch (activePage) {
            case PageConstants.Home:
                setBackground('black');
                break;
            case PageConstants.Profile:
                setBackground('black');
                break;
            case PageConstants.Introduction: // 添加这个 case
                setBackground('blue'); // 可以根据需求调整颜色
                break;
            case PageConstants.Experience:
                setBackground('black');
                break;
            case PageConstants.Portfolio: // 添加这个 case
                setBackground('black'); // 可以根据需求调整颜色
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
                        <Nav.Link href={`#${PageConstants.Profile}`} data-menuanchor={PageConstants.Profile} className="active">
                            {t('profile')}
                        </Nav.Link>
                        <Nav.Link href={`#${PageConstants.Introduction}`} data-menuanchor={PageConstants.Introduction}>
                            {t('achievement')}
                        </Nav.Link>
                        <Nav.Link href={`#${PageConstants.Experience}`} data-menuanchor={PageConstants.Experience}>
                            {t('experience')}
                        </Nav.Link>
                        <Nav.Link href={`#${PageConstants.Portfolio}`} data-menuanchor={PageConstants.Portfolio}>
                            {t('interest')}
                        </Nav.Link>
                        <Nav.Link href={`#${PageConstants.Future}`} data-menuanchor={PageConstants.Future}>
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