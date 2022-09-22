import React from "react";

type Props = {
  title: string;
  children: string | JSX.Element;
};

export const Block3 = ({ title, children }: Props) => {
  return (
    <div className="ml-10 mb-1">
      <h4 className="text-lg">{title}</h4>
      <div className="my-1 ml-5">{children}</div>
    </div>
  );
};
