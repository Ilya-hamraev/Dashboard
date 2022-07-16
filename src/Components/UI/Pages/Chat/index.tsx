import { FC } from "react";
import { css } from "@emotion/css";

import ChatsList from "Components/UI/ChatsList";
import Avatar from "Components/UI/Avatar";
import { useScrollToBottom } from "hooks/useScrollToBottom";
import { useInput } from "hooks/useInput";
import { Groups } from "types";

const container = css`
  display: flex;
  height: 100%;
`;
const channels = css`
  max-width: 200px;
  border-right: 1px solid #d2d2d2;
  overflow: hidden;
  overflow-y: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const channels_search = css`
  display: block;
  padding: 10px;
  background: #fff;
  border-bottom: 1px solid #d2d2d2;
  z-index: 1;
`;

const channels_search_input = css`
  width: 100%;
`;

const chat = css`
  flex-direction: column;
  display: flex;
  flex: 1;
`;
const chat_header = css`
  padding: 15px;
  border-bottom: 1px solid #d2d2d2;
`;
const chat_body = css`
  padding: 15px;
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  overflow: hidden;
  overflow-y: auto;
`;
const chat_body_wrapper = css`
  display: flex;
  flex-direction: column;
`;
const message = css`
  display: flex;

  margin-bottom: 15px;
  width: fit-content;
`;

const message_text = css`
  padding: 5px 10px;
  border-radius: 10px;
`;

const message_date = css`
  font-size: 12px;
  margin-left: 10px;
`;

const last_element = css``;

const chat_footer = css`
  padding: 15px;
  border-top: 1px solid #d2d2d2;
`;
const chat_align = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const chat_input_wrapper = css`
  width: 100%;
  padding: 0 20px;
`;
const chat_input = css`
  width: 100%;
  resize: none;
`;

const list: Groups = [
  { name: "Ilya hamraev", isActive: true, avatar: "" },
  { name: "Vasya Puplin", isActive: false, avatar: "" },
  { name: "Silena Gomes", isActive: true, avatar: "" },
  { name: "Johny Deep", isActive: true, avatar: "" },
  { name: "Kirrill Roga", isActive: true, avatar: "" },
  { name: "Erlf Foonl", isActive: true, avatar: "" },
  { name: "Pops Ololohe", isActive: true, avatar: "" },
];

const ChatLayout = () => {
  const searchInput = useInput("");
  const scrollToRef = useScrollToBottom();

  return (
    <section className={container}>
      <aside className={channels}>
        <div className={channels_search}>
          <input
            {...searchInput}
            type="search"
            className={channels_search_input}
          />
        </div>
        <ChatsList
          list={list.filter((el) => el.name.includes(searchInput.value))}
        />
      </aside>
      <div className={chat}>
        <div className={chat_header}>header</div>
        <div className={chat_body}>
          <ul className={chat_body_wrapper}>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message /> <Message />
            <Message />
            <Message /> <Message />
            <Message />
            <Message /> <Message />
            <Message />
            <Message /> <Message />
            <Message />
            <Message /> <Message />
            <Message />
            <Message /> <Message />
            <Message />
            <Message /> <Message />
            <Message />
            <Message /> <Message />
            <Message />
            <Message /> <Message />
            <Message />
            <Message /> <Message />
            <Message />
            <Message /> <Message />
            <Message />
            <Message /> <Message />
            <Message />
            <Message /> <Message />
            <Message />
            <Message /> <Message />
            <Message />
            <Message /> <Message />
            <Message />
            <Message />
            <div ref={scrollToRef} className={last_element} />
          </ul>
        </div>
        <div className={chat_footer}>
          <div className={chat_align}>
            <div>прикрепить</div>
            <div className={chat_input_wrapper}>
              <textarea className={chat_input} />
            </div>
            <div>emoji</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatLayout;

type MessageType = {
  date?: string;
};

const Message: FC<MessageType> = () => {
  return (
    <li className={message}>
      <div>
        <Avatar />
      </div>
      <div>
        <div className={message_text}>my message text</div>
        <span className={message_date}>29.04.22</span>
      </div>
    </li>
  );
};
