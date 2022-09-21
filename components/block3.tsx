import React from "react";

type Props = {
  title: string;
  children: string | JSX.Element;
};

export const Block3 = ({ title, children }: Props) => {
  return (
    <div className="ml-2 mb-1">
      <h4 className="text-lg">{title}</h4>
      <div className="my-0.2 ml-2">{children}</div>
    </div>
  );
};
