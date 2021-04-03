import React from "react";
import CardAnim from "../../../assets/images/card-animation.gif";
import "./CardStateComponent.css";
import { trEn, trRo } from "../../../translations/translation";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

interface Props {
  state: string;
  language: string;
}

export default function CardStateComponent(props: Props) {
  const { cardStateText } = useSelector((state) => state) as any;
  const { state, language } = props;

  if (state === "default")
    return (
      <div className="card-state">
        <img
          className="card-state__animation"
          src={CardAnim}
          key="animation-image"
        />
      </div>
    );

  return (
    <div className="card-state">
      {state === "loading" && (
        <svg
          width="130"
          height="130"
          viewBox="0 0 38 38"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#9F9F9F"
        >
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)" strokeWidth="1">
              <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
              <path d="M36 18c0-9.94-8.06-18-18-18" stroke="#000">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          </g>
        </svg>
      )}

      {state === "error" && <div className="card-state__error"></div>}
      {state === "success" && <div className="card-state__success"></div>}
      <div className="card-state__text">
        {language === "en" && (
          <motion.p
            className={state}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
          >
            {trEn(cardStateText)}
          </motion.p>
        )}
        {language === "ro" && (
          <motion.p
            className={state}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
          >
            {trRo(cardStateText)}
          </motion.p>
        )}
      </div>
    </div>
  );
}
