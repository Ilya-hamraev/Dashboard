import { css } from "@emotion/css";

export const avatar = css`
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  border-radius: 50%;
  border: 1px solid var(--gray-2);

  &.online {
    &:after {
      content: "";
      width: 10px;
      height: 10px;
      background: var(--green);
      border-radius: 50%;
      position: absolute;
      right: 2px;
      bottom: 2px;
    }
  }
`;

export const avatar_img = css`
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  overflow: hidden;
`;

export const initials = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 1em;
  font-family: "OpenSansBold", sans-serif;
  color: var(--black);
`;
