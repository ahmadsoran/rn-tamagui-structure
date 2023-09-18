import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./langs/en.json";
import ar from "./langs/ar.json";
import ku from "./langs/ku.json";

//empty for now

const resources = {
  en,
  ar,
  ku,
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  compatibilityJSON: "v3",
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;

// Define a type for the en object
type EnObject = typeof en["translation"];

// Define a mapped type to represent the translation keys
type TranslationKeys<T> = {
  [K in keyof T]: T[K] extends object
    ? `${K & string}.${TranslationKeys<T[K]>}`
    : K & string;
}[keyof T];

// Define a type for the translation keys of the en object
type TranslationKey = TranslationKeys<EnObject>;

export function t(key: TranslationKey) {
  return i18n.t(key);
}
