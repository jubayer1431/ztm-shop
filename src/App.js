import "./App.scss";
import { Route, Routes } from "react-router-dom";
import "./components/directory/Directory";
import HomeRoutes from "./routes/HomeRoutes/HomeRoutes";
import NavigationRoutes from "./routes/NavigationRoutes/NavigationRoutes";
import AuthenticationRoutes from "./routes/AuthenticationRoutes/AuthenticationRoutes";
import ShopRoutes from "./routes/ShopRoutes/ShopRoutes";
import CheckoutRoutes from "./routes/CheckoutRoutes/CheckoutRoutes";
import { useEffect } from "react";
import {
  createUserDocFromAuth,
  onAuthStateChangedObserverListener,
} from "./utils/Firebase/firebase";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/userAction";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return onAuthStateChangedObserverListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
  }, []);

  return (
    <Routes>
      <Route path={"/"} element={<NavigationRoutes />}>
        <Route index element={<HomeRoutes />} />
        <Route path={"shop/*"} element={<ShopRoutes />} />
        <Route path={"auth"} element={<AuthenticationRoutes />} />
        <Route path={"checkout"} element={<CheckoutRoutes />} />
      </Route>
    </Routes>
  );
};

export default App;
