import { Request, Response, NextFunction } from "express";
import { RESPONSE_MESSAGE, STATUSCODE } from "../service/const_values_service";
import { compare_jwt } from "../service/jwt_service";

export const auth_middleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.path.includes("/swagger/")) {
    next();
  } else {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ");

      if (token.length != 2) {
        return res.status(STATUSCODE.AUTHENTICATION_ERROR).json({
          s: 0,
          m: RESPONSE_MESSAGE.TOKEN_MISSING,
        });
      }

      const check = compare_jwt(token[1]);

      if (check.error) {
        return res.status(STATUSCODE.AUTHENTICATION_ERROR).json({
          s: 0,
          m: check.error,
        });
      }

      const data = JSON.parse(check.data!);

      if (data.id && data.email && data.role) {
        req.body = {
          ...req?.body,
          _user_id: data.id,
          _email: data.email,
          _role: data.role,
        };
      } else {
        return res.status(STATUSCODE.AUTHENTICATION_ERROR).json({
          s: 0,
          m: RESPONSE_MESSAGE.TOKEN_MISSING,
        });
      }

      next();
    } else {
      return res.status(STATUSCODE.AUTHENTICATION_ERROR).json({
        s: 0,
        m: RESPONSE_MESSAGE.TOKEN_MISSING,
      });
    }
  }
};
