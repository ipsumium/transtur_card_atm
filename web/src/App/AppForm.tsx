import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    setTimeout(() => {
      if (language === "en") {
        setLanguage("ro");
      } else {
        setLanguage("en");
      }
    }, 5000);
  }, [language]);

  useEffect(() => {
    const waitingCard = cardStateText.localeCompare("Waiting a card") === 0;
    if (waitingCard) {
      setState("default");
    }

    const checkingCardReaders =
      cardStateText.localeCompare("Checking card readers") === 0;
    const readingCard = cardStateText.localeCompare("Reading the card") === 0;
    const savingOnFile =
      cardStateText.localeCompare("Saving card data into a file") === 0;
    const uploadingOnFTP =
      cardStateText.localeCompare("Uploading a file on FTP") === 0;
    const parsingDataCard =
      cardStateText.localeCompare("Parsing Card Data") === 0;

    if (
      checkingCardReaders ||
      readingCard ||
      savingOnFile ||
      uploadingOnFTP ||
      parsingDataCard
    ) {
      setState("loading");
    }

    const unknownCard = cardStateText.localeCompare("Unknown") === 0;
    const ftpUploadFailure =
      cardStateText.localeCompare("FTP upload failure") === 0;
    const saveFileFailure =
      cardStateText.localeCompare("Save file failure") === 0;
    const readFail = cardStateText.includes("error");

    if (unknownCard || ftpUploadFailure || saveFileFailure || readFail) {
      setState("error");
    }

    const completed =
      cardStateText.localeCompare("Completed. Take your card.") === 0;

    if (completed) {
      setState("success");
    }
  }, [cardStateText]);

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
