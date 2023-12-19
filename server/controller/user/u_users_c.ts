import DBService from "../../service/db_service";
import { Request, Response } from "express";

export default class Users extends DBService {
  constructor() {
    super();
  }

  get_user_list = async (req: Request, res: Response) => {
    this.r = await this.select(
      "select * from users where id = ? order by created_at desc",
      [req.body._user_id]
    );
    return this.response.success(res);
  };
}
