import { FC } from "react";
import classNames from "classnames";

import * as styles from "components/UI/Message/styles";
import Avatar from "components/UI/Avatar";

type Type = {
  date?: any;
  text: string;
  avatar: string;
  alignRight?: boolean;
};

const Message: FC<Type> = ({ date, text, avatar, alignRight }) => {
  const myMessage = alignRight;

  return (
    <li className={classNames(styles.message, { alignRight: myMessage })}>
      <div
        className={classNames(styles.wrapper_avatar, { alignRight: myMessage })}
      >
        <Avatar img={avatar} />
      </div>
      <div>
        <div
          className={classNames(styles.message_text, { alignRight: myMessage })}
        >
          {text}
        </div>
        <span className={styles.message_date}>{date}</span>
      </div>
    </li>
  );
};

export default Message;
