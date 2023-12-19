import jwt, { TokenExpiredError } from "jsonwebtoken";
import { JWT_SCRET } from "../config/env_config";
import {
  algorithm,
  staticInitVector,
  staticSecurityKey,
} from "./const_keys_service";
import crypto from "crypto";

export const generate_jwt = (data: any): string => {
  const cipher = crypto.createCipheriv(
    algorithm,
    staticSecurityKey,
    staticInitVector
  );
  let encryptedData = cipher.update(JSON.stringify(data), "utf-8", "hex");
  encryptedData += cipher.final("hex");

  const token = jwt.sign({ encryptedData }, JWT_SCRET!, {
    expiresIn: "24h",
  });

  return token;
};

export const compare_jwt = (token: string) => {
  try {
    const decode = jwt.verify(token, JWT_SCRET!) as {
      encryptedData: string;
      exp: number;
      iat: number;
    };

    const decipher = crypto.createDecipheriv(
      algorithm,
      staticSecurityKey,
      staticInitVector
    );

    if (decode.exp) {
      const currentTimeInSeconds = Math.floor(Date.now() / 1000);
      if (decode.exp < currentTimeInSeconds) {
        return { error: "Token expired" };
      }
    }

    let decryptedData = decipher.update(decode.encryptedData, "hex", "utf-8");

    decryptedData += decipher.final();

    return { error: null, data: decryptedData };
  } catch (e) {
    if (e instanceof TokenExpiredError) {
      return { error: "Token expired" };
    }
    // console.log(e);
    return { error: "Invalid token" };
  }
};
