import { Router } from "express";
import User from "../controller/user/u_users_c";
const UserRoute = Router();

UserRoute.get("/get-list", (req, res) => {
  const c = new User();
  return c.get_user_list(req, res);
});

export default UserRoute;
