import { UploadedFile } from "express-fileupload";
import { InterfaceUser } from "../service/const_interface_services";
import { FILE_PATH } from "../service/const_values_service";
import DBService from "../service/db_service";
import { Request, Response } from "express";

interface IUser extends InterfaceUser {
  full_name: string;
  cc: string;
  phno: string;
}

export default class User extends DBService {
  constructor() {
    super();
  }

  update_user = async (req: Request<{}, {}, IUser, {}>, res: Response) => {
    const { cc, full_name, phno, _user_id } = req.body;

    let signature;

    if (
      req.files &&
      Object.keys(req.files).length &&
      req.files.signature_media
    ) {
      signature = await this.upload_file({
        file: req.files.signature_media as UploadedFile,
        file_path: FILE_PATH.D_SIGNATURE_IMAGE,
      });
    }

    const ins = await this.update({
      table: "users",
      condition: { id: _user_id },
      parms: { cc, full_name, phno, signature_media: signature },
    });

    if (!ins) return this.response.error(res);
    this.r = ins;
    return this.response.success(res);
  };
}
