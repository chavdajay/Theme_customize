import { createContext, useContext, useState } from "react";
import gu from "../locales/gu.json";
import en from "../locales/en.json";
import hi from "../locales/hi.json";

const langs = { gu, en, hi };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("gu"); // Default Gujarati // en | gu | hi

  const t = (key) => langs[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
