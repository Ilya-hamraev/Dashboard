import { FC } from "react";
import { css } from "@emotion/css";
import classNames from "classnames";

type Props = {
  color?: string;
};

const ellipsis = css`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 30px;

  span {
    position: absolute;
    top: 36%;
    transform: translateY(-50%);
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: var(--black);
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-child(1) {
      left: 8px;
      animation: ellipsis1 0.6s infinite;
    }

    &:nth-child(2) {
      left: 8px;
      animation: ellipsis2 0.6s infinite;
    }

    &:nth-child(3) {
      left: 32px;
      animation: ellipsis2 0.6s infinite;
    }

    &:nth-child(4) {
      left: 56px;
      animation: ellipsis3 0.6s infinite;
    }
  }

  @keyframes ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;

export const Loader: FC<Props> = ({ color }) => (
  <span className={classNames(ellipsis)} style={{ background: color }}>
    <span />
    <span />
    <span />
    <span />
  </span>
);
