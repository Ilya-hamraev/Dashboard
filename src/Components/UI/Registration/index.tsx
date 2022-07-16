import { FC } from "react";
import { useFormik } from "formik";

import { Button } from "components/UI/Button";
import { Input } from "components/UI/Input";
import * as styles from "components/UI/Registration/styles";

type Props = {
  goBack: () => void;
};

const Registration: FC<Props> = ({ goBack }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className={styles.content} onSubmit={formik.handleSubmit}>
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
        <Input
          name="repeatPassword"
          htmlType="password"
          placeholder="Repeat the password"
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
        />
      </div>
      <div className={styles.box_wrapper}>
        <Button primary htmlType="submit">
          Sign Up
        </Button>
      </div>
      <div className={styles.box_wrapper}>
        <Button link onClick={goBack}>
          Go Back
        </Button>
      </div>
    </form>
  );
};

export default Registration;
