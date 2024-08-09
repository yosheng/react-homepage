import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navigation.scss'

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" className="resume">
            <Navbar.Brand href="#home" data-menuanchor="home">
                Yosheng Zhang
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="nav-collapse" />
            <Navbar.Collapse id="nav-collapse">
                <Nav className="ml-auto" id="menu">
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
        </Navbar>
    );
};

export default Navigation;