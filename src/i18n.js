import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en_translate from "./i18n/en-US.json";
import ru_transltate from "./i18n/ru-RU.json";

const options = {
    order: [
        "querystring",
        "cookie",
        "localStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
    ],
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
};

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            "en-US": {
                translation: en_translate,
            },
            "ru-RU": {
                translation: ru_transltate,
            },
        },
        detection: options,
        // lng: "en",
        fallbackLng: "en-US",
        keySeparator: ".",
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        react: {
            transSupportBasicHtmlNodes: true,
        },
    });

export default i18n;
