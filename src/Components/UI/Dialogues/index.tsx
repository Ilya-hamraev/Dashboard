import { FC } from "react";
import { css } from "@emotion/css";

import Dialogue from "components/UI/Dialogue";
import { Groups } from "types";

const dialogues_list = css`
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  flex: 1;
`;

type Props = {
  list: Groups;
};

const Dialogues: FC<Props> = ({ list }) => {
  return (
    <ul className={dialogues_list}>
      {list.map((el) => (
        <Dialogue
          key={el._id}
          isActive={false}
          name={el.user.fullName}
          avatar={el.user.avatar}
          created_at={el.created_at}
          message={el.text}
        />
      ))}
    </ul>
  );
};

export default Dialogues;
