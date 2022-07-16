import { FC, FormEvent, useState } from "react";

import { Button } from "components/UI/Button";
import { Input } from "components/UI/Input";
import { useInput } from "hooks/useInput";
import Registration from "components/UI/Registration";
import * as styles from "components/UI/Pages/Login/styles";

const LoginLayout: FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const login = useInput("");
  const password = useInput("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ login: login.value });
    console.log({ password: password.value });
  };

  const goBack = () => setIsSignUp(!isSignUp);

  return (
    <div className={styles.container}>
      {isSignUp ? (
        <div className={styles.content}>
          <div className={styles.title}>Registration</div>
          <form className={styles.form}>
            <div className={styles.box}>
              <Registration goBack={goBack} />
            </div>
          </form>
        </div>
      ) : (
        <div className={styles.content}>
          <div className={styles.title}>Sign In</div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.box}>
              <div className={styles.box_wrapper}>
                <Input {...login} placeholder="Email" />
              </div>
              <div className={styles.box_wrapper}>
                <Input
                  {...password}
                  placeholder="Password"
                  htmlType="password"
                />
              </div>
              <div className={styles.box_wrapper}>
                <Button primary htmlType="submit" onClick={handleSubmit}>
                  Login
                </Button>
              </div>
              <div className={styles.box_wrapper}>
                <Button link onClick={goBack}>
                  Sign Up
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
