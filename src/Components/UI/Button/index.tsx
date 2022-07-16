import { FC } from "react";
import { css } from "@emotion/css";
import classNames from "classnames";

import { Children } from "types";

type Props = {
  children: Children;
  htmlType?: "button" | "submit";
  primary?: boolean;
  secondary?: boolean;
  link?: boolean;
  // type?: "primary" | "secondary" | "default" | "text" | "link";
  borderless?: boolean;
  className?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const button = css`
  padding: 10px;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1.5rem;
  transition: 0.5s;
  min-width: 100px;
  font-family: "OpenSansRegular", sans-serif;

  &.link {
    border: none;
    background: none;
    color: var(--primary);
  }

  &.primary {
    border: none;
    background: var(--primary);
    color: var(--white);
    border-radius: 10px;
    box-shadow: var(--shadow_input);
  }
`;

export const Button: FC<Props> = ({
  children,
  onClick,
  htmlType = "button",
  borderless,
  className,
  primary,
  secondary,
  link,
}) => {
  return (
    <button
      className={classNames(button, className, {
        primary: primary,
        borderless: borderless,
        secondary: secondary,
        link: link,
      })}
      type={htmlType}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
