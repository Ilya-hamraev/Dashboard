import { FC } from "react";
import { css } from "@emotion/css";

import { Button } from "Components/UI/Button";
import { useInput } from "hooks/useInput";

const content = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const box_wrapper = css`
  padding: 20px;
`;

type Props = {
  goBack: () => void;
};

const Registration: FC<Props> = ({ goBack }) => {
  const emailInput = useInput("");
  const passwordInput = useInput("");

  return (
    <div className={content}>
      <div className={box_wrapper}>
        <input type="email" name="email" {...emailInput} placeholder="email" />
      </div>
      <div className={box_wrapper}>
        <input
          type="password"
          name="password"
          {...passwordInput}
          placeholder="password"
        />
      </div>
      <div className={box_wrapper}>
        <Button onClick={() => {}}>Register</Button>
      </div>
      <div className={box_wrapper}>
        <Button onClick={goBack}>Go Back</Button>
      </div>
    </div>
  );
};

export default Registration;
