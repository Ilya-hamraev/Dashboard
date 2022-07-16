import { FC } from "react";
import classNames from "classnames";

import * as styles from "components/UI/Message/styles";
import Avatar from "components/UI/Avatar";

type Type = {
  date?: any;
  text: string;
  avatar: string;
  isMe?: boolean;
};

const Message: FC<Type> = ({ date, text, avatar, isMe }) => {
  return (
    <li className={classNames(styles.message, { alignRight: isMe })}>
      <div className={classNames(styles.wrapper_avatar, { alignRight: isMe })}>
        <Avatar img={avatar} />
      </div>
      <div>
        <div className={classNames(styles.message_text, { alignRight: isMe })}>
          {text}
        </div>
        <span className={styles.message_date}>{date}</span>
      </div>
    </li>
  );
};

export default Message;
