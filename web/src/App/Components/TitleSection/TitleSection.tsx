import React from "react";
import "./TitleSection.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

interface Props {
  title?: string;
  subtitle?: {
    en: string;
    ro: string;
  };
}

export default function TitleSection(props: Props) {
  const { language } = useSelector((state) => state) as any;
  const { title, subtitle } = props;
  const { en: subtitleEn, ro: subtitleRo } = subtitle;

  return (
    <div className="title-section">
      {title && <h2>{title}</h2>}
      {subtitle && (
        <>
          {language === "en" && (
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
            >
              {subtitleEn}
            </motion.h3>
          )}
          {language === "ro" && (
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
