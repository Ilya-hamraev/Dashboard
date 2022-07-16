import { FC } from "react";
import { css } from "@emotion/css";

import Avatar from "components/UI/Avatar";

type Props = {
  name: string;
  isActive?: boolean;
  avatar: string;
};

const dialogue_item = css`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px 20px;
  transition: 0.4s;
  font-size: 1em;
  font-family: "OpenSansRegular", sans-serif;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background: var(--gray-2);
  }
`;

const dialogue_name = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Dialogue: FC<Props> = ({ name, isActive }) => {
  return (
    <li className={dialogue_item}>
      <span style={{ marginRight: 10 }}>
        <Avatar name={name} isActive />
      </span>
      <p className={dialogue_name}>{name}</p>
    </li>
  );
};

export default Dialogue;
