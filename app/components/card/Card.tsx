import React from "react";

type CardProps = {
  children: React.ReactNode
}

export default function Card (props: CardProps) {
  const { children } = props;

  return (
    <div className={"border rounded-md border-slate-800"}>
      {children}
    </div>
  );
}
