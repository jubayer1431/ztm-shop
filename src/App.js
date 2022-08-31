import "./App.scss";
import { Route, Routes } from "react-router-dom";
import "./components/directory/Directory";
import HomeRoutes from "./routes/HomeRoutes/HomeRoutes";
import NavigationRoutes from "./routes/NavigationRoutes/NavigationRoutes";
import SignInRoutes from "./routes/SignInRoutes/SignInRoutes";
const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<NavigationRoutes />}>
        <Route index element={<HomeRoutes />} />
        {/*<Route path={'shop'} element={<HomeRoutes />} />*/}
        <Route path={"sign-in"} element={<SignInRoutes />} />
      </Route>
    </Routes>
  );
};

export default App;
