import React from 'react';

interface PageSectionProps {
    activePage: string;
    sectionClass?: string;
    pageKey: string;
    children: React.ReactNode;
}

const PageSection: React.FC<PageSectionProps> = ({ activePage, sectionClass, pageKey, children }) => {
    const isVisible = activePage === pageKey;

    return (
        <div className={`section ${sectionClass || ''}`}>
            <div className={`page-content ${isVisible ? 'visible' : 'hidden'}`}>
                {children}
            </div>
        </div>
    );
};

export default PageSection;