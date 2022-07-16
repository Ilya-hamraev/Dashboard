import { FC } from "react";
import { css } from "@emotion/css";

import Dialogue from "components/UI/Dialogue";
import { Groups } from "types";

const dialogues_list = css`
  width: 100%;
  min-width: 250px;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  flex: 1;
`;

type Props = {
  list: Groups;
};

const Dialogues: FC<Props> = ({ list }) => (
  <ul className={dialogues_list}>
    {list.map((el) => (
      <Dialogue
        key={el.name}
        name={el.name}
        isActive={el.isActive}
        avatar={el.avatar}
      />
    ))}
  </ul>
);

export default Dialogues;
