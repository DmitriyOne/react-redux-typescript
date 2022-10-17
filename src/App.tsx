import { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Todos, Users } from "./screens";

const App: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/todos" element={<Todos />} />
    </Routes>
  );
}

export default App;
