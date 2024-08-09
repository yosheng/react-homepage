import React, { useState } from 'react';
import './App.scss';
import ReactFullpage, {fullpageOptions} from '@fullpage/react-fullpage';
import Home from "./components/Home";
import Profile from "@/components/Profile";
import Achievement from "@/components/Achievement";
import Experience from "@/components/Experience";
import Interest from "@/components/Interest";
import Future from "@/components/Future";
import Navigation from "@/components/Navigation";

const App = () => {
    const [activePage, setActivePage] = useState('home');

    const options : fullpageOptions = {
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
        scrollOverflow: true,
        loopHorizontal: false,
        scrollBar: false,
        menu: '#menu',
        easing: 'easeInOut',
        credits: {}
    };

    const fullpageNavList = [
        { page: 'home', title: '个人简历' },
        { page: 'profile', title: '基本资料' },
        { page: 'achievement', title: '个人成就' },
        { page: 'experience', title: '工作经历' },
        { page: 'interest', title: '实务经验' },
        { page: 'future', title: '展望未来' }
    ];

    return (
        <div id="app">
            <Navigation />
            <ReactFullpage
                {...options}
                render={({ state, fullpageApi }) => (
                    <>
                        <div className="section item-1">
                            <div className={`page-content ${activePage === 'home' ? 'visible' : 'hidden'}`}>
                                <Home />
                            </div>
                        </div>
                        <div className="section item-2">
                            <div className={`page-content ${activePage === 'profile' ? 'visible' : 'hidden'}`}>
                                <Profile />
                            </div>
                        </div>
                        <div className="section item-3">
                            <div className={`page-content ${activePage === 'achievement' ? 'visible' : 'hidden'}`}>
                                <Achievement />
                            </div>
                        </div>
                        <div className="section item-4">
                            <div className={`page-content ${activePage === 'experience' ? 'visible' : 'hidden'}`}>
                                <Experience />
                            </div>
                        </div>
                        <div className="section item-5">
                            <div className={`page-content ${activePage === 'interest' ? 'visible' : 'hidden'}`}>
                                <Interest />
                            </div>
                        </div>
                        <div className="section item-6">
                            <div className={`page-content ${activePage === 'future' ? 'visible' : 'hidden'}`}>
                                <Future />
                            </div>
                        </div>
                        <div
                            id="fp-nav"
                            className="d-none d-sm-block"
                            style={{ marginTop: '-68px', right: '17px' }}
                        >
                            <ul>
                                {fullpageNavList.map((item, index) => (
                                    <li key={index} data-toggle="tooltip" data-placement="left" title={item.title}>
                                        <a
                                            href={`#${item.page}`}
                                            className={item.page === activePage ? 'active' : ''}
                                            onClick={() => fullpageApi.moveTo(item.page)}
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}
            />
        </div>
    );
};

export default App;