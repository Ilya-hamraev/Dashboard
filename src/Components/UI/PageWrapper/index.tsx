import { FC } from "react";
import { css } from "@emotion/css";
import classNames from "classnames";

import { Children } from "types";

const wrapper = css`
  width: 100%;
  height: 100%;
`;

type PageWrapperType = {
  children: Children;
  className?: string;
};

const PageWrapper: FC<PageWrapperType> = ({ children, className }) => (
  <main className={classNames(wrapper, className)}>{children}</main>
);

export default PageWrapper;
