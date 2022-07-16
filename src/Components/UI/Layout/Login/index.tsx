import { FC, FormEvent, useState } from "react";
import { css } from "@emotion/css";

import { Button } from "Components/UI/Button";
import { useInput } from "hooks/useInput";
import Registration from "Components/UI/Registration";

const container = css`
  padding: 20px;
  width: 100%;
  height: 100%;
`;

const content = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const box = css`
  border-radius: 5px;
  max-width: 400px;
  max-height: 400px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const box_wrapper = css`
  padding: 20px;
`;

const LoginLayout: FC = () => {
  const [isRegistration, setRegistration] = useState<boolean>(false);
  const login = useInput("");
  const password = useInput("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ login: login.value });
    console.log({ password: password.value });
  };

  return (
    <div className={container}>
      {isRegistration ? (
        <form className={content}>
          <div className={box}>
            <Registration goBack={() => setRegistration(false)} />
          </div>
        </form>
      ) : (
        <form className={content} onSubmit={handleSubmit}>
          <div className={box}>
            <div className={box_wrapper}>
              <input {...login} type="text" placeholder="login" />
            </div>
            <div className={box_wrapper}>
              <input {...password} type="text" placeholder="password" />
            </div>
            <div className={box_wrapper}>
              <Button htmlType="submit" onClick={handleSubmit}>
                Login
              </Button>
            </div>
            <div className={box_wrapper}>
              <Button borderless onClick={() => setRegistration(true)}>
                Registarion
              </Button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default LoginLayout;
