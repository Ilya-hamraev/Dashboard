import { css } from "@emotion/css";

export const container = css`
  border-right: 1px solid var(--gray);
  padding: 15px;
  max-width: 100px;
  width: 100%;
`;

export const list_routes = css`
  display: flex;
  flex-direction: column;
  height: -webkit-fill-available;
`;

export const route = css`
  &:last-child {
    margin-top: auto;
  }
`;

export const button = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  cursor: pointer;
  border-radius: 5px;
`;

export const button_icon = css``;
