import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from '../src/locals/en.json';
import es from '../src/locals/es.json';
import zh_tw from '../src/locals/zh-TW.json';

const resources={
    en:{
        translation:en,
    },
    es:{
        translation:es,
    },
    zh:{
        translation:zh_tw,
    },
};

i18n.use(initReactI18next).init({
    resources,
    fallbackLng:"en",
    lng:"zh",
    interpolation:{
        escapeValue:false,
    }
})

export default i18n;