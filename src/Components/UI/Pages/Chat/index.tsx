import Message from "components/UI/Message";
import Dialogs from "components/UI/Dialogs";

import { useScrollToBottom } from "hooks/useScrollToBottom";
import { useInput } from "hooks/useInput";
import * as styles from "components/UI/Pages/Chat/styles";
import { dialogueTest } from "components/UI/Dialogs/dataTest";

const ChatLayout = () => {
  const searchInput = useInput("");
  const scrollToRef = useScrollToBottom();

  const filteredDialogues = dialogueTest.filter((dialogue) =>
    dialogue.user.fullName
      .toLocaleLowerCase()
      .includes(searchInput.value.toLocaleLowerCase())
  );

  return (
    <section className={styles.container}>
      <aside className={styles.channels}>
        <div className={styles.channels_search}>
          <input
            {...searchInput}
            type="search"
            className={styles.channels_search_input}
          />
        </div>
        <Dialogs list={filteredDialogues} />
      </aside>
      <div className={styles.chat}>
        <div className={styles.chat_header}>header</div>
        <div className={styles.chat_body}>
          <ul className={styles.chat_body_wrapper}>
            <Message
              isMe
              text="Привет, как дела?"
              name={"Alexey"}
              avatar="https://sun3-11.userapi.com/s/v1/ig2/RV90zyfVWCIeuE8OQWPg3j81lduPe-6pwsQn5Wx1gqaQOJS72gPakkXbWE3iuTLiwfoVyC-hvG09S5XV2Q1gnFWu.jpg?size=100x0&quality=96&crop=0,107,873,873&ava=1"
            />
            <Message
              name={"Dima"}
              text="Привет, Все отличнО!"
              avatar="https://sun3-10.userapi.com/s/v1/ig2/M5qreqT9Qg_pejsD4orWkbdvZZtEnxHNQpPmUgH4yDT2M_UutV0rf8wmaxHIiJafjc3qC36x-HDZijpfUK4hBBmI.jpg?size=100x100&quality=96&crop=247,0,480,480&ava=1"
            />
            <Message
              name={"Ilya"}
              text="Когда в гости?"
              avatar="https://sun3-16.userapi.com/s/v1/ig2/YXC09dFJPYRlmmBI6IcT_kRacves3_9l3LPue0vUmcw5AYpdMCbTwe5lqZhtKzhznDoEJev1pY7FP026W4cruDbp.jpg?size=100x100&quality=95&crop=0,0,800,800&ava=1"
            />
            <Message
              name={"Grisha"}
              isMe
              text="Привет, как дела?"
              avatar="https://sun3-11.userapi.com/s/v1/ig2/RV90zyfVWCIeuE8OQWPg3j81lduPe-6pwsQn5Wx1gqaQOJS72gPakkXbWE3iuTLiwfoVyC-hvG09S5XV2Q1gnFWu.jpg?size=100x0&quality=96&crop=0,107,873,873&ava=1"
            />
            <Message
              name={"Petya"}
              text="Привет, Все отличнО!"
              avatar="https://sun3-10.userapi.com/s/v1/ig2/M5qreqT9Qg_pejsD4orWkbdvZZtEnxHNQpPmUgH4yDT2M_UutV0rf8wmaxHIiJafjc3qC36x-HDZijpfUK4hBBmI.jpg?size=100x100&quality=96&crop=247,0,480,480&ava=1"
            />
            <Message
              name={"Grisha"}
              text="Когда в гости?"
              avatar="https://sun3-16.userapi.com/s/v1/ig2/YXC09dFJPYRlmmBI6IcT_kRacves3_9l3LPue0vUmcw5AYpdMCbTwe5lqZhtKzhznDoEJev1pY7FP026W4cruDbp.jpg?size=100x100&quality=95&crop=0,0,800,800&ava=1"
            />
            <Message
              isMe
              name={"Ilya"}
              text="Привет, как дела?"
              avatar="https://sun3-11.userapi.com/s/v1/ig2/RV90zyfVWCIeuE8OQWPg3j81lduPe-6pwsQn5Wx1gqaQOJS72gPakkXbWE3iuTLiwfoVyC-hvG09S5XV2Q1gnFWu.jpg?size=100x0&quality=96&crop=0,107,873,873&ava=1"
            />
            <Message
              name={"Petya"}
              text="Привет, Все отличнО!"
              avatar="https://sun3-10.userapi.com/s/v1/ig2/M5qreqT9Qg_pejsD4orWkbdvZZtEnxHNQpPmUgH4yDT2M_UutV0rf8wmaxHIiJafjc3qC36x-HDZijpfUK4hBBmI.jpg?size=100x100&quality=96&crop=247,0,480,480&ava=1"
            />
            <Message
              name={"Ilya"}
              text="Когда в гости?"
              avatar="https://sun3-16.userapi.com/s/v1/ig2/YXC09dFJPYRlmmBI6IcT_kRacves3_9l3LPue0vUmcw5AYpdMCbTwe5lqZhtKzhznDoEJev1pY7FP026W4cruDbp.jpg?size=100x100&quality=95&crop=0,0,800,800&ava=1"
            />
            <div ref={scrollToRef} className={styles.anchor} />
          </ul>
        </div>
        <div className={styles.chat_footer}>
          <div className={styles.chat_align}>
            <div>прикрепить</div>
            <div className={styles.chat_input_wrapper}>
              <textarea className={styles.chat_input} />
            </div>
            <div>emoji</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatLayout;
