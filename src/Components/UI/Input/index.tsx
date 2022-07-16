import { FC, ChangeEventHandler } from "react";
import { css } from "@emotion/css";
import classNames from "classnames";

type Props = {
  htmlType?: "text" | "email" | "password";
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  className?: string;
  name?: string;
};

const input_wrapper = css`
  width: 100%;
  display: inline-block;
`;

const input_styles = css`
  width: 100%;
  padding: 8px 10px;
  font-size: 1rem;
  line-height: 1.5rem;
  transition: all 0.5s;
  border-radius: 5px;
  border: 1px solid var(--gray);
  box-shadow: var(--shadow_input);
  font-family: "OpenSansRegular", sans-serif;

  &:focus {
    border-color: var(--primary);
  }

  &:focus-visible {
    outline: none;
  }
`;

export const Input: FC<Props> = ({
  htmlType = "text",
  value,
  onChange,
  placeholder,
  className,
  name,
}) => {
  return (
    <div className={input_wrapper}>
      <input
        name={name}
        className={classNames(input_styles, className)}
        type={htmlType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
