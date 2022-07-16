import { FC, FormEvent, useState } from "react";
import { css } from "@emotion/css";

import { Button } from "components/UI/Button";
import { Input } from "components/UI/Input";
import { useInput } from "hooks/useInput";
import Registration from "components/UI/Registration";

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
  flex-direction: column;
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
  width: 100%;
  text-align: center;
`;

const title = css`
  font-size: 24px;
  margin-bottom: 20px;
  font-family: "OpenSansRegular", sans-serif;
`;

const form = css`
  max-width: 360px;
  width: 100%;
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
        <div className={content}>
          <div className={title}>Registration</div>
          <form className={form}>
            <div className={box}>
              <Registration goBack={() => setRegistration(false)} />
            </div>
          </form>
        </div>
      ) : (
        <div className={content}>
          <div className={title}>Login</div>
          <form className={form} onSubmit={handleSubmit}>
            <div className={box}>
              <div className={box_wrapper}>
                <Input {...login} placeholder="Login" />
              </div>
              <div className={box_wrapper}>
                <Input {...password} placeholder="Password" />
              </div>
              <div className={box_wrapper}>
                <Button primary htmlType="submit" onClick={handleSubmit}>
                  Sign In
                </Button>
              </div>
              <div className={box_wrapper}>
                <Button link onClick={() => setRegistration(true)}>
                  Registarion
                </Button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginLayout;
