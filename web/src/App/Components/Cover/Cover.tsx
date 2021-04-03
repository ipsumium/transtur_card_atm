import * as React from "react";
import "./Cover.css";
import Truck from "../../../assets/images/truck.jpg";
import { motion } from "framer-motion";

interface Props {
  language: string;
  title: {
    en: string;
    ro: string;
  };
}

function Cover(props: Props) {
  const { title, language } = props;
  const { en: titleInEn, ro: titleInRo } = title;

  return (
    <div
      className="cover"
      style={{
        backgroundImage: `url(${Truck})`,
      }}
    >
      <div className="cover__backdrop" />
      {language === "en" && (
        <motion.h1
          className="cover__title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
        >
          {titleInEn}
        </motion.h1>
      )}
      {language === "ro" && (
        <motion.h1
          className="cover__title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
        >
          {titleInRo}
        </motion.h1>
      )}
    </div>
  );
}

export default Cover;
