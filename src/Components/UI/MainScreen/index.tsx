import React, { FC } from "react";
import { css } from "@emotion/css";

import NavPanel from "Components/UI/NavPanel";

import { Children } from "types";

type MainScreenType = {
  children: Children;
};

const container = css`
  width: 100%;
  height: 100%;
  display: flex;
`;

const content = css`
  flex: 1;
  background: #f9f9f9;
`;

const MainScreen: FC<MainScreenType> = ({ children }) => {
  return (
    <section className={container}>
      <NavPanel />
      <div className={content}>{children}</div>
    </section>
  );
};

export default MainScreen;
