import { css } from "@emotion/css";

export const avatar = css`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline-block;
  overflow: hidden;
  position: relative;
  border: 1px solid var(--gray-2);

  &.online {
    &:after {
      content: "";
      width: 8px;
      height: 8px;
      background: #89ff00;
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
