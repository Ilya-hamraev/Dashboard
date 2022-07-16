import { FC, FormEvent, useState } from "react";

import { Button } from "components/UI/Button";
import { Input } from "components/UI/Input";
import { useInput } from "hooks/useInput";
import Registration from "components/UI/Registration";
import * as styles from "components/UI/Pages/Login/styles";

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
    <div className={styles.container}>
      {isRegistration ? (
        <div className={styles.content}>
          <div className={styles.title}>Registration</div>
          <form className={styles.form}>
            <div className={styles.box}>
              <Registration goBack={() => setRegistration(false)} />
            </div>
          </form>
        </div>
      ) : (
        <div className={styles.content}>
          <div className={styles.title}>Login</div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.box}>
              <div className={styles.box_wrapper}>
                <Input {...login} placeholder="Login" />
              </div>
              <div className={styles.box_wrapper}>
                <Input {...password} placeholder="Password" />
              </div>
              <div className={styles.box_wrapper}>
                <Button primary htmlType="submit" onClick={handleSubmit}>
                  Sign In
                </Button>
              </div>
              <div className={styles.box_wrapper}>
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
