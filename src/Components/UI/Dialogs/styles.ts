import { css } from "@emotion/css";

export const dialogs_list = css`
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  flex: 1;
`;

export const dialogs_empty = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  img {
    max-width: 150px;
  }
`;

export const dialogs_empty_title = css`
  font-size: 1em;
  text-align: center;
  font-family: "OpenSansRegular", sans-serif;
`;
