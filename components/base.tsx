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
    <div className="h-9/12 w-9/12 mx-auto my-10  justify-center items-center ">
      <h1 className="text-3xl border-b border-black">{title}</h1>
      {children}
    </div>
  );
};
