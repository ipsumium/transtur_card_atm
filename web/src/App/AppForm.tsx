import React, { useState } from "react";
// import { ReactReduxContext } from 'react-redux'
import { connect, useSelector, useStore } from "react-redux";
import { trEn, trRo } from "translations/translation";
import "./AppForm.css";
import Cover from "./Components/Cover/Cover";
import TitleSection from "./Components/TitleSection/TitleSection";
import MainTitle from "./Components/MainTitle/MainTitle";
import CardAnim from "../assets/images/card-animation.gif";
import { AnimatePresence } from "framer-motion";
import titles from "../translations/titles";
const { coverTitle, infoSubtitle, mainTitle } = titles;

const AppForm = () => {
  const { language } = useSelector((state) => state) as any;
  const store = useStore();

  setTimeout(() => {
    store.dispatch({
      type: "UPDATE",
      language: language === "en" ? "ro" : "en",
    });
  }, 5000);
  // console.log(trEn(cardState.cardStateText), trRo(cardState.cardStateText));

  return (
    <main>
      <AnimatePresence>
        <Cover title={coverTitle} key="cover" />
        <div className="content" key="content">
          <TitleSection
            title="TAHO.RO"
            subtitle={infoSubtitle}
            key="title-section"
          />
          <MainTitle title={mainTitle.default[language]} key="main-title" />
          <img className="animation-gif" src={CardAnim} key="animation-image" />
        </div>
      </AnimatePresence>
    </main>
  );
};

export default AppForm;
