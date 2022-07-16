import { FC } from "react";

import { Button } from "components/UI/Button";
import { Input } from "components/UI/Input";
import { useInput } from "hooks/useInput";
import * as styles from "components/UI/Registration/styles";

type Props = {
  goBack: () => void;
};

const Registration: FC<Props> = ({ goBack }) => {
  const emailInput = useInput("");
  const passwordInput = useInput("");
  const passwordDublicateInput = useInput("");

  return (
    <div className={styles.content}>
      <div className={styles.box_wrapper}>
        <Input {...emailInput} htmlType="email" placeholder="Email" />
      </div>
      <div className={styles.box_wrapper}>
        <Input {...passwordInput} htmlType="password" placeholder="Password" />
      </div>
      <div className={styles.box_wrapper}>
        <Input
          {...passwordDublicateInput}
          htmlType="password"
          placeholder="Repeat the password"
        />
      </div>
      <div className={styles.box_wrapper}>
        <Button primary onClick={() => {}}>
          Sign Up
        </Button>
      </div>
      <div className={styles.box_wrapper}>
        <Button link onClick={goBack}>
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default Registration;
