import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./i18n/en.json";
import ru from "./i18n/ru.json";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            ru: { translation: ru },
        },
        supportedLngs: ["en", "ru"],
        nonExplicitSupportedLngs: true,
        load: "languageOnly",
        fallbackLng: "en",
        detection: {
            order: ["querystring", "localStorage", "navigator"],
            lookupQuerystring: "lng",
            caches: ["localStorage"],
        },
    });

i18n.on("languageChanged", (lng) => {
    document.documentElement.lang = lng;
});

export default i18n;
