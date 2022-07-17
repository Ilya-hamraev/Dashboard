import { FC } from "react";
import dayjs from "dayjs";

import Avatar from "components/UI/Avatar";
import * as styles from "components/UI/Dialog/styles";

type Props = {
  name: string;
  isActive?: boolean;
  avatar: string | null;
  created_at: string;
  message: string;
};

const Dialog: FC<Props> = ({ name, isActive, avatar, message, created_at }) => {
  const formatedDate = new Date(created_at);
  const dateLastMessage = dayjs(formatedDate).format("DD/MM/YY");

  return (
    <li className={styles.dialog}>
      <span style={{ marginRight: 8 }}>
        <Avatar img={avatar} name={name} isActive />
      </span>
      <div className={styles.message_box}>
        <div className={styles.message_description}>
          <p className={styles.name}>{name}</p>
          <p className={styles.create_date}>{dateLastMessage}</p>
        </div>
        <div className={styles.text}>{message}</div>
      </div>
    </li>
  );
};

export default Dialog;
