import { FC } from "react";
import { css } from "@emotion/css";

import ChatElement from "components/UI/ChatElement";
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
