import React, {useEffect, useState} from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import './Navigation.scss'

interface INavigationProps {
    activePage: string
}

const Navigation: React.FunctionComponent<INavigationProps> = ({activePage}) => {
    const [background, setBackground] = useState('black');

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

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className={`resume ${background}`}>
            <Container>
                <Navbar.Brand href="#home" data-menuanchor="home">
                    Yosheng Zhang
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="navbar-toggle">
                    <Nav id="menu">
                        <Nav.Link href="#profile" data-menuanchor="profile" className="active">
                            基本資料
                        </Nav.Link>
                        <Nav.Link href="#achievement" data-menuanchor="achievement">
                            個人成就
                        </Nav.Link>
                        <Nav.Link href="#experience" data-menuanchor="experience">
                            工作經歷
                        </Nav.Link>
                        <Nav.Link href="#interest" data-menuanchor="interest">
                            業餘興趣
                        </Nav.Link>
                        <Nav.Link href="#future" data-menuanchor="future">
                            展望未來
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;