import React from "react";

const block2 = {
  margin: "1rem 0.5rem 1rem",
};

const inblock2 = {
  margin: "5px 1rem",
};

type Props = {
  title: string;
  children: string | JSX.Element;
};

export const Block2 = ({ title, children }: Props) => {
  return (
    <div style={block2}>
      <h3>{title}</h3>
      <div style={inblock2}>{children}</div>
    </div>
  );
};
