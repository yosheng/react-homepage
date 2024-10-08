import React, {useEffect, useState} from 'react';
import './App.scss';
import ReactFullpage, {fullpageOptions} from '@fullpage/react-fullpage';
import Home from "@/components/PageSection/Home";
import Introduction from "components/PageSection/Introduction";
import Experience from "@/components/PageSection/Experience";
import Portfolio from "components/PageSection/Portfolio";
import Navigation from "@/components/Navigation";
import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger';
import {Tooltip} from "react-bootstrap";
import {useTranslation} from 'react-i18next';
import PageSection from './components/PageSection';
import {PageConstants} from "@/utils/constants";
import Skill from "@/components/PageSection/Skill";
import Contact from "@/components/PageSection/Contact";

declare global {
    interface Window {
        fullpage_api: any;
    }
}

const App = () => {
    const {t} = useTranslation();

    const [activePage, setActivePage] = useState('home');

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!window.fullpage_api) return;

            switch (event.key) {
                case 'ArrowUp':
                    window.fullpage_api.moveSectionUp();
                    break;
                case 'ArrowDown':
                    window.fullpage_api.moveSectionDown();
                    break;
                case 'ArrowLeft':
                    window.fullpage_api.moveSlideLeft();
                    break;
                case 'ArrowRight':
                    window.fullpage_api.moveSlideRight();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const options: fullpageOptions = {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        sectionsColor: [
            'transparent',
            'transparent',
            '#e4e4e4',
            '#41b883',
            'transparent',
            'transparent'
        ],
        scrollingSpeed: 700,
        navigation: false,
        anchors: [
            PageConstants.Home,
            PageConstants.Introduction,
            PageConstants.Skill,
            PageConstants.Experience,
            PageConstants.Portfolio,
            PageConstants.Contact,
        ],
        afterLoad: (origin, destination, direction) => {
            setActivePage(destination.anchor as string);
        },
        onLeave: (origin, destination, direction) => {
            setActivePage(destination.anchor as string);
        },
        scrollOverflow: false,
        loopHorizontal: false,
        scrollBar: false,
        menu: '#menu',
        easing: 'easeInOut',
        credits: {}
    };

    const fullpageNavList = [
        {page: PageConstants.Home, title: t('navigation.home')},
        {page: PageConstants.Introduction, title: t('navigation.introduction')},
        {page: PageConstants.Skill, title: t('navigation.skill')},
        {page: PageConstants.Experience, title: t('navigation.experience')},
        {page: PageConstants.Portfolio, title: t('navigation.portfolio')},
        {page: PageConstants.Contact, title: t('navigation.contact')},
    ];

    return (
        <div id="app">
            <Navigation activePage={activePage}/>
            <ReactFullpage
                {...options}
                render={({state, fullpageApi}) => {
                    if (!fullpageApi) {
                        // ref: https://github.com/alvarotrigo/react-fullpage/issues/404
                        window.fullpage_api = fullpageApi;
                    }

                    return (
                        <>
                            <PageSection activePage={activePage} sectionClass="home-section" pageKey={PageConstants.Home}>
                                <Home />
                            </PageSection>
                            <PageSection activePage={activePage} sectionClass="introduction-section" pageKey={PageConstants.Introduction}>
                                <Introduction />
                            </PageSection>
                            <PageSection activePage={activePage} sectionClass="skill-section" pageKey={PageConstants.Skill}>
                                <Skill />
                            </PageSection>
                            <PageSection activePage={activePage} sectionClass="experience-section" pageKey={PageConstants.Experience}>
                                <Experience />
                            </PageSection>
                            <PageSection activePage={activePage} sectionClass="portfolio-section" pageKey={PageConstants.Portfolio}>
                                <Portfolio />
                            </PageSection>
                            <PageSection activePage={activePage} sectionClass="contact-section" pageKey={PageConstants.Contact}>
                                <Contact />
                            </PageSection>
                        </>
                    );
                }}
            />
            <div
                id="nav-dot"
                className="d-none d-sm-block"
            >
                <ul>
                    {fullpageNavList.map((item, index) => (
                        <li key={index} style={{listStyleType: 'none'}}>
                            <OverlayTrigger
                                placement="left"
                                overlay={<Tooltip>{item.title}</Tooltip>}
                            >
                                <a
                                    href={`#${item.page}`}
                                    className={item.page === activePage ? 'active' : ''}
                                >
                                </a>
                            </OverlayTrigger>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;
