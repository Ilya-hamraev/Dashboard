import classNames from "classnames";
import { css } from "@emotion/css";

const avatar = css`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline-block;
  background: #00bcd4;
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

const avatar_img = css``;

const Avatar = ({ isActive }: { isActive?: boolean }) => {
  return (
    <span className={classNames(avatar, { online: isActive })}>
      <img className={avatar_img} src="" alt="" />
    </span>
  );
};

export default Avatar;
