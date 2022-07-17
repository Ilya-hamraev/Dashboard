import { css } from "@emotion/css";

export const dialogue = css`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px 15px 10px 10px;
  transition: 0.4s;
  font-family: "OpenSansRegular", sans-serif;
  font-size: 0.9em;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 80%;
    height: 1px;
    background: var(--gray-2);
  }

  &:last-child {
    margin-bottom: 0;

    &:after {
      visibility: hidden;
    }
  }

  &:hover {
    background: var(--gray-2);
  }
`;

export const name = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: "OpenSansMedium", sans-serif;
`;

export const message_box = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

export const message_description = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7px;
`;

export const create_date = css`
  color: var(--gray-3);
`;

export const text = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 0.9em;
`;
