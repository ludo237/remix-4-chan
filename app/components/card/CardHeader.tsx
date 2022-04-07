import React, { BaseHTMLAttributes, DetailedHTMLProps } from "react";
import cx from "clsx";
import { createMemoClass } from "~/utils";

type CardHeaderProps = {
  color: "orange" | "red",
  options?: React.ReactNode
  text: string,
} & DetailedHTMLProps<BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>

const useCardClasses = createMemoClass((props: CardHeaderProps) => {
  const defaultClasses = "flex justify-between p-1 rounded-t-md text-white";
  const colors = {
    orange: "bg-orange-300 text-rose-800",
    red: "bg-rose-800 text-white",
  };

  return cx(defaultClasses, colors[props.color]);
});

export default function CardHeader (props: CardHeaderProps) {
  const {
    className,
    options,
    text,
  } = props;

  const cssClasses = useCardClasses(props);

  return (
    <div className={cx(cssClasses, className)}>
      <div className={"flex-1 font-bold text-lg"}>{text}</div>
      <div>
        {options}
      </div>
    </div>
  );
}
