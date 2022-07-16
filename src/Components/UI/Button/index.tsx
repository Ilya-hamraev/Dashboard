import { FC, MouseEventHandler } from "react";
import classNames from "classnames";

import { Children } from "types";

type ButtonType = {
  children: Children;
  htmlType?: "button" | "submit";
  borderless?: boolean;
  className?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: FC<ButtonType> = ({
  children,
  onClick,
  htmlType = "button",
  borderless,
  className,
}) => {
  return (
    <button
      className={classNames(className, { borderless })}
      type={htmlType}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
