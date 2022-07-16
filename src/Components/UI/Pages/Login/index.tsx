import { FC, useState } from "react";
import { useFormik } from "formik";

import { Button } from "components/UI/Button";
import { Input } from "components/UI/Input";
import Registration from "components/UI/Registration";
import * as styles from "components/UI/Pages/Login/styles";

const LoginLayout: FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const goBack = () => setIsSignUp(!isSignUp);

  return (
    <div className={styles.container}>
      {isSignUp ? (
        <div className={styles.content}>
          <div className={styles.title}>Registration</div>
          <div className={styles.form}>
            <div className={styles.box}>
              <Registration goBack={goBack} />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.content}>
          <div className={styles.title}>Sign In</div>
          <form onSubmit={formik.handleSubmit} className={styles.form}>
            <div className={styles.box}>
              <div className={styles.box_wrapper}>
                <Input
                  name="email"
                  htmlType="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
              <div className={styles.box_wrapper}>
                <Input
                  name="password"
                  htmlType="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </div>
              <div className={styles.box_wrapper}>
                <Button primary htmlType="submit">
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
