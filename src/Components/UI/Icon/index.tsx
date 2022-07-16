import classNames from "classnames";
import React from "react";

import { Icons } from "assets/css/icons";

export type IIconProps = {
  name: Icons;
  className?: string;
  color?: string;
  forwardedRef?: React.Ref<HTMLElement>;
};

const Icon: React.FC<IIconProps> = ({
  forwardedRef,
  name,
  className,
  color,
}) => (
  <i
    ref={forwardedRef}
    aria-hidden="true"
    className={classNames(`icon icon-${name}`, className)}
    style={{ color }}
  />
);

export default Icon;
