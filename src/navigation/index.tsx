import Login from "components/Screens/Login";
import Main from "components/Screens/Dashboard";
import Chat from "components/Screens/Chat";
import Settings from "components/Screens/Settings";
import { Icons } from "assets/css/icons";
import { Routes } from "types";

export const navigation: Routes = {
  login: {
    order: 1,
    hidden: true,
    path: "/login",
    element: <Login />,
    private: false,
  },
  main: {
    order: 2,
    path: "/",
    name: "Dashboard",
    element: <Main />,
    private: true,
    icon: Icons.Dashboard,
  },
  chat: {
    order: 3,
    path: "/chat",
    name: "Chat",
    element: <Chat />,
    private: true,
    icon: Icons.Chat,
  },
  settings: {
    order: 4,
    path: "/settings",
    name: "Settings",
    element: <Settings />,
    private: true,
    icon: Icons.Settings,
  },
};
