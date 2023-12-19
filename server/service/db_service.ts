import { Response, Request } from "express";
import DB from "../config/sql_config";
import { RowDataPacket, ResultSetHeader } from "mysql2";
import { NODE_MODE } from "../config/env_config";
import { STATUSCODE } from "./const_values_service";
import { UploadedFile } from "express-fileupload";
import path from "path";
import crypto from "crypto";

interface Responses {
  s: number;
  m: string;
  r: any;
  error: any;
}

interface IVarify<T> {
  parms: (keyof T)[];
  req: Request;
}

type r = Response;

type r_result = Response<any, Record<string, any>>;

export default class DBService implements Responses {
  error: any = null;
  s: number = 1;
  m: string = "Success";
  r: any = null;

  selectOne = async (
    query: string,
    props: any[]
  ): Promise<RowDataPacket | null> => {
    try {
      const res = await DB.query<RowDataPacket[]>(query, props);
      return res[0][0];
    } catch (e) {
      this.error = `${e}`;
      return null;
    }
  };

  select = async (query: string, props: any[]): Promise<RowDataPacket[]> => {
    try {
      const res = await DB.query<RowDataPacket[]>(query, props);
      return res[0];
    } catch (e) {
      this.error = `${e}`;
      return [];
    }
  };

  insert = async (query: string, props: any[]): Promise<number> => {
    try {
      const res = await DB.query<ResultSetHeader>(query, props);
      return res[0].insertId;
    } catch (e) {
      this.error = `${e}`;
      return 0;
    }
  };

  delete = async (query: string, props: any[]): Promise<number> => {
    try {
      const res = await DB.query<ResultSetHeader>(query, props);
      return res[0].affectedRows;
    } catch (e) {
      this.error = `${e}`;
      return 0;
    }
  };

  update = async ({
    table,
    parms,
    condition,
    orCondition = "",
  }: {
    table: string;
    parms: Record<string, any>;
    condition: Record<string, any>;
    orCondition?: string;
  }) => {
    if (
      !Object.values(parms).filter(
        (value) => value !== null && value !== undefined
      ).length
    ) {
      return 0;
    }
    let q = `update ${table} set `;

    q += Object.keys(parms)
      .filter((key) => parms[key] !== null && parms[key] !== undefined)
      .map((key) => `${key}= ? `)
      .join(",");

    let p = Object.keys(condition)
      .filter((key) => condition[key] !== null && condition[key] !== undefined)
      .map((key) => `${key}= ? and `)
      .join(" ");

    if (Object.keys(condition).length) {
      q += " where " + p.slice(0, -4);
    }
    q += orCondition;

    const v = [
      ...Object.values(parms).filter(
        (value) => value !== null && value !== undefined
      ),
      ...Object.values(condition).filter(
        (value) => value !== null && value !== undefined
      ),
    ];

    try {
      const res = await DB.query<ResultSetHeader>(q, v);
      return res[0].affectedRows;
    } catch (e) {
      this.error = `${e}`;
      return 0;
    }
  };

  varify = <T>({ parms, req }: IVarify<T>): boolean => {
    let required: string[] = [];
    const value = { ...req.body, ...req.params, ...req.query };

    for (let v of parms) {
      if (
        !value.hasOwnProperty(v) ||
        (value[v] != null && value[v].length <= 0)
      ) {
        required.push(v as string);
      }
    }

    if (!required.length) {
      return false;
    }

    this.m = "Required : " + required.join(" ");

    return true;
  };

  upload_file = async ({
    file,
    file_path,
  }: {
    file: UploadedFile;
    file_path: string;
  }): Promise<string | null> => {
    try {
      const file_name =
        crypto.randomBytes(16).toString("hex") + path.extname(file.name);
      await file.mv("./public/uploads/" + file_path + "/" + file_name);

      return file_name;
    } catch (e) {
      this.error = `${e}`;
      return null;
    }
  };

  response = {
    success: (res: r): r_result => {
      this.m = "Success";
      this.s = 1;
      return res.status(STATUSCODE.SUCCESS).json({
        s: this.s,
        m: this.m,
        r: this.r,
        error: NODE_MODE == "dev" ? this.error : null,
      });
    },
    error: (res: r, m?: string): r_result => {
      this.m = m ?? "Opps! something went wrong. Please try again.";
      this.s = 0;
      return res.status(STATUSCODE.SUCCESS).json({
        s: this.s,
        m: this.m,
        r: this.r,
        error: NODE_MODE == "dev" ? this.error : null,
      });
    },
    authenticate_error: (res: r, m?: string): r_result => {
      this.m = m ?? "Not authentication";
      this.s = 0;
      return res.status(STATUSCODE.AUTHENTICATION_ERROR).json({
        s: this.s,
        m: this.m,
        r: this.r,
        error: NODE_MODE == "dev" ? this.error : null,
      });
    },
    missing_field: (res: r, m?: string): r_result => {
      this.m = m ? "Required " + m : this.m;
      this.s = 0;
      return res.status(STATUSCODE.BAD_REQUST).json({
        s: this.s,
        m: this.m,
        r: this.r,
        error: NODE_MODE == "dev" ? this.error : null,
      });
    },
    internal_server: (res: r, m?: string): r_result => {
      this.m = m ?? "Opps something went wrong. Please try again.";
      this.s = 0;
      return res.status(STATUSCODE.INTERNAL_SERVER).json({
        s: this.s,
        m: this.m,
        r: this.r,
        error: NODE_MODE == "dev" ? this.error : null,
      });
    },
  };
}
