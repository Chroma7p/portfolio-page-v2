import React from "react";

const block1 = {
  margin: "10px 1rem 0px",
};

const inblock1 = {
  margin: "5px 1rem",
};

type Props = {
  title: string;
  children: string | JSX.Element;
};

export const Block1 = ({ title, children }: Props) => {
  return (
    <div style={block1}>
      <h2>{title}</h2>
      <div style={inblock1}>{children}</div>
    </div>
  );
};
