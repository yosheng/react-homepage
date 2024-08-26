import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../locales/en-US.json';
import zhCN from '../locales/zh-CN.json';
import zhTW from '../locales/zh-TW.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            'en-US': {
                translation: en,
            },
            'zh-CN': {
                translation: zhCN,
            },
            'zh-TW': {
                translation: zhTW,
            },
        },
        fallbackLng: 'en-US', // 备用语言
        interpolation: {
            escapeValue: false,
        },
        detection: {
            // 检测选项配置（可选）
            order: ['navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage', 'cookie'],
        },
    });

export default i18n;