import React from "react";
import "./MainTitle.css";

interface Props {
  title?: string;
  subtitle?: string;
}

export default function MainTitle(props: Props) {
  const { title, subtitle } = props;
  return (
    <div className="main-title">
      {title && <h2>{title}</h2>}
      {subtitle && <h3>{subtitle}</h3>}
    </div>
  );
}
