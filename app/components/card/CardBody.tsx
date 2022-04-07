import React from "react";

type CardBodyProps = {
  children: React.ReactNode
}

export default function CardBody (props: CardBodyProps) {
  const { children } = props;

  return (
    <div className={"py-1 px-1.5 rounded-b-md bg-white"}>
      {children}
    </div>
  );
}
