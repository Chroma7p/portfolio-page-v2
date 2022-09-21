import React from "react";

const block3 = {
  margin: "0px 0px 0.5rem",
};
const inblock3 = {
  margin: "0px 1rem",
};

type Props = {
  title: string;
  children: string | JSX.Element;
};

export const Block3 = ({ title, children }: Props) => {
  return (
    <div style={block3}>
      <h4>{title}</h4>
      <div style={inblock3}>{children}</div>
    </div>
  );
};
