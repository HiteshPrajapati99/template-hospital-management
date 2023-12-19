import { Router } from "express";
import Auth from "../controller/auth_c";
const AuthRoute = Router();

AuthRoute.post("/login", (req, res, next) => {
  const c = new Auth();
  return c.login(req, res);
});

AuthRoute.post("/sign-up", (req, res, next) => {
  const c = new Auth();
  return c.sign_up(req, res);
});


export default AuthRoute;
