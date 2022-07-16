import { css } from "@emotion/css";

export const message = css`
  display: flex;
  margin-bottom: 15px;
  width: fit-content;

  &.alignRight {
    margin-left: auto;
    flex-direction: row-reverse;
  }
`;

export const wrapper_avatar = css`
  margin-right: 10px;

  &.alignRight {
    margin-left: 10px;
  }
`;

export const message_text = css`
  padding: 10px 20px;
  font-family: "OpenSansRegular", sans-serif;
  font-size: 0.8em;
  border-radius: 10px 10px 10px 0;
  background: var(--primary);
  color: var(--white);

  &.alignRight {
    color: var(--black);
    background: none;
    border-radius: 10px 10px 0px 10px;
    border: 1px solid var(--gray);
  }
`;

export const message_date = css`
  font-size: 12px;
  margin-left: 10px;
`;
