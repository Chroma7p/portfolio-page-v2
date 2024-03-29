import React from "react";

type Props = {
  title: string;
  children: string | JSX.Element;
};

export const Block1 = ({ title, children }: Props) => {
  return (
    <div className="my-3 ml-10">
      <h2 className="text-3xl border-b border-black">{title}</h2>
      <div className="mx-3 my-2">{children}</div>
    </div>
  );
};
