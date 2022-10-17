import { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import { REACT_ROUTES } from "./constans/routes";
import { Home, Todos, Users } from "./screens";

const App: FunctionComponent = () => {
  return (
    <Routes>
      <Route path={REACT_ROUTES.HOME} element={<Home />} />
      <Route path={REACT_ROUTES.USERS} element={<Users />} />
      <Route path={REACT_ROUTES.TODOS} element={<Todos />} />
    </Routes>
  );
}

export default App;
