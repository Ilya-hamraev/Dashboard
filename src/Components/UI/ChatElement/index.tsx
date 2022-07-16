import { FC } from "react";
import { css } from "@emotion/css";

import Avatar from "components/UI/Avatar";

type ChatElementType = {
  name: string;
  isActive?: boolean;
  avatar: string;
};

const channels_list_item = css`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;

const chat_name = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ChatElement: FC<ChatElementType> = ({ name, isActive }) => {
  return (
    <li className={channels_list_item}>
      <span style={{ marginRight: 10 }}>
        <Avatar isActive />
      </span>
      <p className={chat_name}>{name}</p>
    </li>
  );
};

export default ChatElement;
