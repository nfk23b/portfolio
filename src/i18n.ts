import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./i18n/en.json";
import ru from "./i18n/ru.json";
import sk from "./i18n/sk.json";

// Registered before init so the initial detection also updates the document.
i18n.on("languageChanged", () => {
    document.documentElement.lang = i18n.resolvedLanguage ?? "en";
    document.title = i18n.t("meta.title");
    document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", i18n.t("meta.description"));
});

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            ru: { translation: ru },
            sk: { translation: sk },
        },
        supportedLngs: ["en", "ru", "sk"],
        nonExplicitSupportedLngs: true,
        load: "languageOnly",
        fallbackLng: "en",
        detection: {
            order: ["querystring", "localStorage", "navigator"],
            lookupQuerystring: "lng",
            caches: ["localStorage"],
        },
    });

export default i18n;
