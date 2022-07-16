import { FC } from "react";
import classNames from "classnames";
import { css } from "@emotion/css";

const avatar = css`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline-block;
  background: #00bcd4;
  overflow: hidden;
  position: relative;

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

const avatar_img = css`
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

type Props = {
  isActive?: boolean;
  img?: string;
};

const Avatar: FC<Props> = ({ isActive, img }) => {
  return (
    <span className={classNames(avatar, { online: isActive })}>
      <img className={avatar_img} src={img} alt="avatar" />
    </span>
  );
};

export default Avatar;
