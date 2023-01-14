import { createContext, useState, useEffect } from "react";
const LangContext = createContext();

const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState('EN');
  const [languageCharged, setLanguageCharged] = useState(false);
  const [content, setContent] = useState({});
  useEffect(() => {
    getTranslation().then(data => {
      setContent(data);
      setTimeout(() =>{
        setLanguageCharged(true);
      }, 500);
    });
  }, [lang]);
  const setLanguage = (language) => {
    setLanguageCharged(false);
    setLang(language);
  }
  async function getTranslation () {
    let translatedContent = await fetch("temp/" + lang + ".json");
    let response = await translatedContent.json();
    return response;
  }
  const contextValue = {
    languageCharged,
    lang,
    content,
    setLanguage
  }
  return (
    <LangContext.Provider value={contextValue}>
      {children}
    </LangContext.Provider>
  );
}

export { LangContextProvider, LangContext }