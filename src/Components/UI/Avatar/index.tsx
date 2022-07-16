import { FC } from "react";
import classNames from "classnames";

import * as styles from "components/UI/Avatar/styles";
import { randomRgba, getInitials } from "helpers";

type Props = {
  isActive?: boolean;
  img?: string;
  name: string;
};

const Avatar: FC<Props> = ({ isActive, img, name }) => {
  const bgColor = randomRgba();
  const initialsName = getInitials(name);

  return (
    <span
      style={{ background: bgColor }}
      className={classNames(styles.avatar, { online: isActive })}
    >
      {img ? (
        <img className={styles.avatar_img} src={img} alt="avatar" />
      ) : (
        <p className={styles.initials}>{initialsName}</p>
      )}
    </span>
  );
};

export default Avatar;
