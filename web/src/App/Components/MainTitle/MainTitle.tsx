import React from "react";
import "./MainTitle.css";
import { motion } from "framer-motion";

interface Props {
  title: {
    en: string;
    ro: string;
  };
  subtitle?: {
    en: string;
    ro: string;
  };
  state: string;
  language: string;
}

export default function MainTitle(props: Props) {
  const { title, subtitle, state, language } = props;
  const { en: titleEn, ro: titleRo } = title;

  let subtitleEn = "",
    subtitleRo = "";
  if (subtitle) {
    subtitleEn = subtitle.en;
    subtitleRo = subtitle.ro;
  }

  return (
    <div className="main-title">
      {language === "en" && (
        <motion.h2
          className={state}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {titleEn}
        </motion.h2>
      )}
      {language === "ro" && (
        <motion.h2
          className={state}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {titleRo}
        </motion.h2>
      )}
      {subtitle && (
        <>
          {language === "en" && subtitleEn && (
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
            >
              {subtitleEn}
            </motion.h3>
          )}
          {language === "ro" && subtitleRo && (
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
            >
              {subtitleRo}
            </motion.h3>
          )}
        </>
      )}
    </div>
  );
}
