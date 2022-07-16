import { FC } from "react";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";

import { RouteParams } from "types";
import { navigation } from "navigation";
import Icon from "Components/UI/Icon";

const container = css`
  border-right: 1px solid #d2d2d2;
  padding: 15px;
  max-width: 100px;
  width: 100%;
`;

const list_routes = css`
  display: flex;
  flex-direction: column;
  height: -webkit-fill-available;
`;

const route = css`
  &:last-child {
    margin-top: auto;
  }
`;

const button = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  cursor: pointer;
  transition: box-shadow 0.4s;
  border-radius: 5px;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
`;

const button_icon = css``;

const NavPanel: FC = () => {
  const links = Object.entries(navigation)
    .reduce<RouteParams[]>((acc, [key, val]) => {
      acc.push(val);
      return acc;
    }, [])
    .filter((el) => !el.hidden)
    .sort((a, b) => a.order - b.order);

  return (
    <nav className={container}>
      <ul className={list_routes}>
        {links.map((link) => (
          <li key={link.path} className={route}>
            <Link to={link.path} className={button}>
              {link.icon && <Icon name={link.icon} className={button_icon} />}
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavPanel;
