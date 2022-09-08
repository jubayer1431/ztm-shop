import "./App.scss";
import { Route, Routes } from "react-router-dom";
import "./components/directory/Directory";
import HomeRoutes from "./routes/HomeRoutes/HomeRoutes";
import NavigationRoutes from "./routes/NavigationRoutes/NavigationRoutes";
import AuthenticationRoutes from "./routes/AuthenticationRoutes/AuthenticationRoutes";
import ShopRoutes from "./routes/ShopRoutes/ShopRoutes";
const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<NavigationRoutes />}>
        <Route index element={<HomeRoutes />} />
        <Route path={"shop"} element={<ShopRoutes />} />
        <Route path={"auth"} element={<AuthenticationRoutes />} />
      </Route>
    </Routes>
  );
};

export default App;
