import { css } from "@emotion/css";

export const container = css`
  padding: 20px;
  width: 100%;
  height: 100%;
`;

export const content = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const box = css`
  border-radius: 5px;
  max-width: 400px;
  max-height: 400px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-shadow: var(--shadow_box);
`;

export const box_wrapper = css`
  padding: 20px;
  width: 100%;
  text-align: center;
`;

export const title = css`
  font-size: 24px;
  margin-bottom: 20px;
  font-family: "OpenSansRegular", sans-serif;
`;

export const form = css`
  max-width: 360px;
  width: 100%;
`;
