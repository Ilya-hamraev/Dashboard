import { FC } from "react";
import { Link } from "react-router-dom";

import { RouteParams } from "types";
import { navigation } from "navigation";
import Icon from "components/UI/Icon";
import * as styles from "components/UI/NavPanel/styles";

const NavPanel: FC = () => {
  const links = Object.entries(navigation)
    .reduce<RouteParams[]>((acc, [key, val]) => {
      acc.push(val);
      return acc;
    }, [])
    .filter((el) => !el.hidden)
    .sort((a, b) => a.order - b.order);

  return (
    <nav className={styles.container}>
      <ul className={styles.list_routes}>
        {links.map((link) => (
          <li key={link.path} className={styles.route}>
            <Link to={link.path} className={styles.button}>
              {link.icon && (
                <Icon name={link.icon} className={styles.button_icon} />
              )}
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavPanel;
