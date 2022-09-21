import React from "react";

const base = {
  padding: "10px 30px 30px",
};

type Props = {
  title: string;
  children: string | JSX.Element;
};

export const Base = ({ title, children }: Props) => {
  return (
    <div style={base}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};
