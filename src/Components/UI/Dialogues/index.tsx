import { FC } from "react";

import Dialogue from "components/UI/Dialogue";
import { Groups } from "types";
import * as styles from "components/UI/Dialogues/styles";
import CatImage from "assets/images/cat.png";

type Props = {
  list: Groups;
};

const Dialogues: FC<Props> = ({ list }) => {
  const isEmpty = !Boolean(list.length);

  return (
    <ul className={styles.dialogues_list}>
      {isEmpty ? (
        <li className={styles.dialogue_empty}>
          <p className={styles.dialogue_empty_title}>Still Empty...</p>
          <img src={CatImage} alt="cat" />
        </li>
      ) : (
        list.map((el) => (
          <Dialogue
            key={el._id}
            isActive={false}
            name={el.user.fullName}
            avatar={el.user.avatar}
            created_at={el.created_at}
            message={el.text}
          />
        ))
      )}
    </ul>
  );
};

export default Dialogues;
