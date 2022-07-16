import { css } from "@emotion/css";

export const container = css`
  border-right: 1px solid var(--gray);
  padding: 15px 0px;
  max-width: 100px;
  width: 100%;
`;

export const list_routes = css`
  display: flex;
  flex-direction: column;
  height: -webkit-fill-available;
  font-size: 0.9em;
  font-family: "OpenSansRegular", sans-serif;
`;

export const route = css`
  &:nth-last-child(2) {
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
  transition: 0.4s;
  color: var(--black);
  position: relative;

  &:hover {
    color: var(--primary);
  }

  &.active {
    color: var(--primary);

    &:before {
      content: "";
      height: 100%;
      display: block;
      width: 2px;
      background: var(--primary);
      position: absolute;
      left: 0;
      top: 0;
    }
  }
`;

export const button_icon = css``;
