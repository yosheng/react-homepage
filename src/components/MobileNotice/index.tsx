import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import './style.scss';

const STORAGE_KEY = 'mobile-notice-dismissed';

const MobileNotice: React.FC = () => {
    const {t} = useTranslation();
    const [visible, setVisible] = useState(() => {
        return localStorage.getItem(STORAGE_KEY) !== 'true';
    });

    if (!visible) return null;

    const handleDismiss = () => {
        localStorage.setItem(STORAGE_KEY, 'true');
        setVisible(false);
    };

    return (
        <div className="mobile-notice d-lg-none">
            <span className="mobile-notice__text">{t('mobile.notice')}</span>
            <button className="mobile-notice__close" onClick={handleDismiss} aria-label="close">
                ✕
            </button>
        </div>
    );
};

export default MobileNotice;