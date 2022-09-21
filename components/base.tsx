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
    <div className="my-5 mx-6">
      <h1 className="rounded-b-md text-3xl">{title}</h1>
      {children}
    </div>
  );
};
