import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

import { RouteParams } from "types";
import { navigation } from "navigation";
import Icon from "components/UI/Icon";
import { Icons } from "assets/css/icons";
import * as styles from "components/UI/NavPanel/styles";

const NavPanel: FC = () => {
  const path = useLocation();

  const links = Object.entries(navigation)
    .reduce<RouteParams[]>((acc, [key, val]) => {
      acc.push(val);
      return acc;
    }, [])
    .filter((el) => !el.hidden)
    .sort((a, b) => a.order - b.order);

  const activePath = path.pathname;

  return (
    <nav className={styles.container}>
      <ul className={styles.list_routes}>
        {links.map((link) => (
          <li key={link.path} className={styles.route}>
            <Link
              to={link.path}
              className={classNames(styles.button, {
                active: path.pathname === link.path,
              })}
            >
              {link.icon && (
                <Icon name={link.icon} className={styles.button_icon} />
              )}
              {link.name}
            </Link>
          </li>
        ))}
        <li className={styles.route}>
          <a className={styles.button} href="#">
            <Icon name={Icons.Logout} className={styles.button_icon} />
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavPanel;
