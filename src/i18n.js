import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationUz from "./locales/uz/translate.json"
import translationEn from "./locales/en/translate.json"
import translationRu from "./locales/ru/translate.json"
import LanguageDetector from 'i18next-browser-languagedetector'



const resources = {
  en: {
    translation: translationEn
  },
  uz: {
    translation: translationUz
  },
  ru: {
    translation: translationRu
  },
};

i18n.use(LanguageDetector)
.use(initReactI18next) 
  .init({
    resources,

    interpolation: {
      escapeValue: false // react already safes from xss
    },
    detection: {
      // Tilni aniqlash uchun qaysi joylarni tekshiradi:
      order: ['localStorage', 'cookie', 'navigator', 'htmlTag', 'path', 'subdomain'],

      // Topilgan tilni qayerda saqlash
      caches: ['localStorage', 'cookie'],
    }
  });

  export default i18n;