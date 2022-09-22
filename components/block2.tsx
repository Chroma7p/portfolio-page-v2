import React from "react";

type Props = {
  title: string;
  children: string | JSX.Element;
};

export const Block2 = ({ title, children }: Props) => {
  return (
    <div className="mt-1 ml-10">
      <h3 className="text-xl">{title}</h3>
      <div className="ml-5 my-2">{children}</div>
    </div>
  );
};
