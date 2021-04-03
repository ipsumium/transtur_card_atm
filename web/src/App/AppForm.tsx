import React, { useState } from "react";
// import { ReactReduxContext } from 'react-redux'
import { useSelector } from "react-redux";
import "./AppForm.css";
import Cover from "./Components/Cover/Cover";
import TitleSection from "./Components/TitleSection/TitleSection";
import MainTitle from "./Components/MainTitle/MainTitle";
import CardStateComponent from "./Components/CardStateComponent/CardStateComponent";
import { AnimatePresence } from "framer-motion";
import titles from "../translations/titles";
const { coverTitle, infoSubtitle, mainTitle, subTitle } = titles;

const AppForm = () => {
  const { cardStateText } = useSelector((state) => state) as any;
  const [language, setLanguage] = useState("en");
  const [state, setState] = useState("default");

  setTimeout(() => {
    if (language === "en") {
      setLanguage("ro");
    } else {
      setLanguage("en");
    }
  }, 5000);

  // console.log(trEn(cardState.cardStateText), trRo(cardState.cardStateText));

  return (
    <main>
      <AnimatePresence>
        <Cover language={language} title={coverTitle} key="cover" />
        <div className="content" key="content">
          <TitleSection
            language={language}
            title="TAHO.RO"
            subtitle={infoSubtitle}
            key="title-section"
          />
          <MainTitle
            language={language}
            title={mainTitle[state]}
            subtitle={subTitle[state]}
            key="main-title"
            state={state}
          />
          <CardStateComponent state={state} language={language} />
        </div>
      </AnimatePresence>
    </main>
  );
};

export default AppForm;
