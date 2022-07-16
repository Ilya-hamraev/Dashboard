import { FC } from "react";
import { css } from "@emotion/css";

import { Button } from "components/UI/Button";
import { Input } from "components/UI/Input";
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
  width: 100%;
  text-align: center;
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
        <Input {...emailInput} htmlType="email" placeholder="Email" />
      </div>
      <div className={box_wrapper}>
        <Input {...passwordInput} htmlType="password" placeholder="Password" />
      </div>
      <div className={box_wrapper}>
        <Button primary onClick={() => {}}>
          Sign Up
        </Button>
      </div>
      <div className={box_wrapper}>
        <Button link onClick={goBack}>
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default Registration;
