import { useRoutes } from "react-router-dom";

import { navigation } from "navigation";

const App = () => {
  const routes = Object.values(navigation);
  const routing = useRoutes(routes);

  return <>{routing}</>;
};

export default App;
