import React, {useEffect, useState} from 'react';
import './App.scss';
import ReactFullpage, {fullpageOptions, fullpageApi} from '@fullpage/react-fullpage';
import Home from "@/components/PageSection/Home";
import Profile from "@/components/PageSection/Profile";
import Introduction from "components/PageSection/Introduction";
import Experience from "@/components/PageSection/Experience";
import Portfolio from "components/PageSection/Portfolio";
import Future from "@/components/PageSection/Future";
import Navigation from "@/components/Navigation";
import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger';
import {Tooltip} from "react-bootstrap";
import {useTranslation} from 'react-i18next';
import PageSection from './components/PageSection';

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
    }, [window.fullpage_api]);

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
            'home',
            'profile',
            'achievement',
            'experience',
            'interest',
            'future'
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
        {page: 'home', title: t('home')},
        {page: 'profile', title: t('profile')},
        {page: 'achievement', title: t('achievement')},
        {page: 'experience', title: t('experience')},
        {page: 'interest', title: t('interest')},
        {page: 'future', title: t('future')}
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
                            <PageSection activePage={activePage} sectionClass="item-1" pageKey="home">
                                <Home/>
                            </PageSection>
                            <PageSection activePage={activePage} sectionClass="item-2" pageKey="profile">
                                <Profile/>
                            </PageSection>
                            <PageSection activePage={activePage} sectionClass="item-3" pageKey="achievement">
                                <Introduction/>
                            </PageSection>
                            <PageSection activePage={activePage} sectionClass="item-4" pageKey="experience">
                                <Experience/>
                            </PageSection>
                            <PageSection activePage={activePage} sectionClass="item-5" pageKey="interest">
                                <Portfolio/>
                            </PageSection>
                            <PageSection activePage={activePage} sectionClass="item-6" pageKey="future">
                                <Future/>
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
