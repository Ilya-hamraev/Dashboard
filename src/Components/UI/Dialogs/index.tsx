import { FC } from "react";

import Dialog from "components/UI/Dialog";
import { Groups } from "types";
import * as styles from "components/UI/Dialogs/styles";
import CatImage from "assets/images/cat.png";

type Props = {
  list: Groups;
};

const Dialogs: FC<Props> = ({ list }) => {
  const isEmpty = !Boolean(list.length);

  return (
    <ul className={styles.dialogs_list}>
      {isEmpty ? (
        <li className={styles.dialogs_empty}>
          <p className={styles.dialogs_empty_title}>Still Empty...</p>
          <img src={CatImage} alt="cat" />
        </li>
      ) : (
        list.map((el) => (
          <Dialog
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

export default Dialogs;
