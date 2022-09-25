import { createContext, useState } from "react";

const LangContext = createContext();

const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState('EN');
  const [languageCharged, setLanguageCharged] = useState(true);
  const setLanguage = (language) => {
	setLanguageCharged(false);
	setLang(language);
	setTimeout(() =>{
		setLanguageCharged(true);
	}, 1000);
  }
  const contextValue = {
    languageCharged,
    lang,
	setLanguage
  }
  return (
    <LangContext.Provider value={contextValue}>
      {children}
    </LangContext.Provider>
  );
}

export { LangContextProvider, LangContext }