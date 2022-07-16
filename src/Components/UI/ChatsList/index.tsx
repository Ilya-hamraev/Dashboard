import { FC } from "react";
import { css } from "@emotion/css";

import Avatar from "components/UI/Avatar";
import { Groups } from "types";

const channels_list = css`
  width: 100%;
  min-width: 250px;
  height: 100%;
  padding: 12px;
  overflow: hidden;
  overflow-y: auto;
  flex: 1;
`;

const channels_list_item = css`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;

type ChatsListType = {
  list: Groups;
};

const ChatsList: FC<ChatsListType> = ({ list }) => (
  <ul className={channels_list}>
    {list.map((el) => (
      <ChatElement
        key={el.name}
        name={el.name}
        isActive={el.isActive}
        avatar={el.avatar}
      />
    ))}
  </ul>
);

export default ChatsList;

type ChatElementType = {
  name: string;
  isActive?: boolean;
  avatar: string;
};

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
