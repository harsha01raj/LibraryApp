import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CreateBook from "../pages/CreateBook";
import Register from "../pages/Register";
import Login from "../pages/Login";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        Home
      </Route>
      <Route path="/bookpost" element={<CreateBook />}>
        Create Book
      </Route>
      <Route path="/register" element={<Register />}>
        Sign up
      </Route>
      <Route path="/login" element={<Login />}>
        Login
      </Route>
    </Routes>
  );
};

export default routes;
