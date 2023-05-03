import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import axios from 'axios';
import i18next from 'i18next';

const fallbackLng = ['en'];
const availableLanguages = ['en', 'fr', 'sp'];

var englishTranslations = '';
var frenchTranslations = '';
var spanishTranslations = '';

const translationEN = JSON.parse(localStorage.getItem('translationEN'));
const translationFR = JSON.parse(localStorage.getItem('translationFR'));
const translationSP = JSON.parse(localStorage.getItem('translationSP'));


if(translationEN){
translationEN.forEach(item => {
  englishTranslations += JSON.stringify(item) + ", ";
});
}

if(translationFR){
translationFR.forEach(item => {
  frenchTranslations += JSON.stringify(item) + ", ";
});
}

if(translationSP){
translationSP.forEach(item => {
  spanishTranslations += JSON.stringify(item) + ", ";
});
}

// console.log("{" + ((frenchTranslations.replace(/,\s*$/, "")).replace(/[{}]/g, "")).replace(/[\/\(\)\']/g, " ") + "}");

const en = JSON.parse("{" + ((englishTranslations.replace(/,\s*$/, "")).replace(/[{}]/g, "")).replace(/[\/\(\)\']/g, "'") + "}");
const fr = JSON.parse("{" + ((frenchTranslations.replace(/,\s*$/, "")).replace(/[{}]/g, "")).replace(/[\/\(\)\']/g, "'") + "}");
const sp = JSON.parse("{" + ((spanishTranslations.replace(/,\s*$/, "")).replace(/[{}]/g, "")).replace(/[\/\(\)\']/g, "'") + "}");

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  sp: { translation: sp }
}

// alert(JSON.stringify(resources));


const options = {
  // order and from where user language should be detected
  order: [ 'navigator', 'htmlTag', 'path', 'subdomain'],

  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: 'myDomain',

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // only detect languages that are in the whitelist
  checkWhitelist: true
}

i18n
  .use(Backend) // load translation using xhr -> see /public/locales. We will add locales in the next step

  .use(LanguageDetector) // detect user language

  .use(initReactI18next) // pass the i18n instance to react-i18next.

  .init({
    resources,
    fallbackLng, // if user computer language is not on the list of available languages, than we will be using the fallback language specified earlier
    debug: true,
    whitelist: availableLanguages,
    detection: options,

    interpolation: {
      escapeValue: false
    },
  });


  if(localStorage.getItem('userInfo')){

    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const userLang = ((userInfo.lang).toLowerCase()).slice(0, 2);
    i18next.changeLanguage(userLang);
    
  }

export default i18n;