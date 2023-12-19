import { Request, Response } from "express";
import DBService from "../service/db_service";
import { generate_jwt } from "../service/jwt_service";
import { compare_password, generate_password } from "../service/bcrypt_service";
import { RESPONSE_MESSAGE } from "../service/const_values_service";

interface ILoginProps {
  email: string;
  password: string;
}

interface ISignupProps {
  email: string;
  password: string;
  full_name: string;
  role: number;
  cc: string;
  phno: string;
}

export default class Auth extends DBService {
  constructor() {
    super();
  }

  login = async (req: Request<{}, {}, ILoginProps, {}>, res: Response) => {
    if (this.varify<ILoginProps>({ parms: ["email", "password"], req })) {
      return this.response.missing_field(res);
    }

    const { email, password } = { ...req.body };
    this.r = await this.selectOne(`select * from users where email = ?`, [
      email,
    ]);

    if (!this.r)
      return this.response.authenticate_error(
        res,
        RESPONSE_MESSAGE.EMAIL_PASSWORD_NOT_MATCH
      );

    const check = await compare_password(password, this.r.password);

    if (!check) {
      this.r = null;
      return this.response.authenticate_error(
        res,
        RESPONSE_MESSAGE.EMAIL_PASSWORD_NOT_MATCH
      );
    }

    if (this.r) {
      this.r.token = generate_jwt({ email, role: this.r.role, id: this.r.id });
      delete this.r.password;
      return this.response.success(res);
    }

    return this.response.authenticate_error(
      res,
      RESPONSE_MESSAGE.EMAIL_PASSWORD_NOT_MATCH
    );
  };

  sign_up = async (req: Request<{}, {}, ISignupProps, {}>, res: Response) => {
    if (
      this.varify<ISignupProps>({
        parms: ["cc", "email", "full_name", "password", "phno", "role"],
        req,
      })
    ) {
      return this.response.missing_field(res);
    }

    const { cc, email, full_name, password, phno, role } = req.body;

    const check = await this.selectOne("select id from users where email = ?", [
      email,
    ]);

    if (check) {
      return this.response.error(res, RESPONSE_MESSAGE.EMAIL_ALREADY_EXISTS);
    }

    const new_password = await generate_password(password);
    if (!new_password) {
      return this.response.internal_server(res);
    }

    const result: number = await this.insert(
      `insert into users (cc,email,full_name,password,phno,role) values(?,?,?,?,?,?) `,
      [cc, email, full_name, new_password, phno, role]
    );

    if (result) {
      this.r = await this.selectOne("select * from users where id = ?", [
        result,
      ]);

      if (result) delete this.r.password;
      this.r.token = generate_jwt({ id: result, email: email, role: role });
      return this.response.success(res);
    }

    return this.response.internal_server(res);
  };
}
