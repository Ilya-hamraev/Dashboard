import { css } from "@emotion/css";

export const container = css`
  display: flex;
  height: 100%;
`;

export const channels = css`
  border-right: 1px solid var(--gray);
  overflow: hidden;
  overflow-y: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const channels_search = css`
  display: block;
  padding: 10px;
  background: var(--white);
  border-bottom: 1px solid var(--gray);
  z-index: 1;
`;

export const channels_search_input = css`
  width: 100%;
`;

export const chat = css`
  flex-direction: column;
  display: flex;
  flex: 1;
`;

export const chat_header = css`
  padding: 15px;
  border-bottom: 1px solid var(--gray);
`;

export const chat_body = css`
  padding: 15px;
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  overflow: hidden;
  overflow-y: auto;
`;

export const chat_body_wrapper = css`
  display: flex;
  flex-direction: column;
`;

export const anchor = css``;

export const chat_footer = css`
  padding: 15px;
  border-top: 1px solid var(--gray);
`;

export const chat_align = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const chat_input_wrapper = css`
  width: 100%;
  padding: 0 20px;
`;

export const chat_input = css`
  width: 100%;
  resize: none;
`;
