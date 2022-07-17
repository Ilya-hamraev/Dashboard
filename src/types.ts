import { ReactNode, ReactElement } from "react";

import { Icons } from "assets/css/icons";

// export enum Route {
//   login = "/login",
//   main = "/",
//   chat = "/chat",
//   settings = "/settings",
// }

// const route = Object.keys(Route);

export type Children = ReactNode;

export type RouteParams = {
  path: string;
  element: ReactElement;
  order: number;
  hidden?: boolean;
  name?: string;
  private: boolean;
  icon?: Icons;
};

export type Routes = Record<string, RouteParams>;

export type Groups = {
  _id: string;
  text: string;
  created_at: string;
  user: {
    _id: string;
    fullName: string;
    avatar: string | null;
  };
}[];
